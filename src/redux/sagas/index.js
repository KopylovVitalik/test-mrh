import { call, put, takeEvery } from "redux-saga/effects";

import {
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  GET_USERS_SAGA,
  CREATE_USER_SAGA,
  UPDATE_USER_SAGA,
  DELETE_USER_SAGA,
  USER_ERRORS,
  GET_USERS_ERROR
} from "redux/actionTypes/types";

import api from "api";
import { all } from "@redux-saga/core/effects";

/*
  Queries
*/

function getUsersQuery() {
  return api
    .get("/users")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

function createUserQuery(user) {
  return api
    .post("/users", {
      ...user,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

function updateUserQuery(id, user) {
  return api
    .put(`/user/${id}`, {
      ...user,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

function deleteUserQuery(id) {
  return api
    .delete(`/user/${id}`)
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    });
}

/*
  Saga tasks
*/

function* getAllUsers() {
  try {
    const users = yield call(getUsersQuery);
    yield put({ type: GET_USERS, payload: users });
  } catch (e) {
    yield put({ type: GET_USERS_ERROR, message: e.message });
  }
}

function* createUser({ user }) {
  try {
    const userCreated = yield call(createUserQuery, user);
    yield put({ type: CREATE_USER, payload: userCreated });
  } catch (e) {
    yield put({ type: USER_ERRORS, payload: e.message });
  }
}

function* updateUser({ id, user }) {
  try {
    const userUpdated = yield call(updateUserQuery, id, user);
    yield put({ type: UPDATE_USER, payload: userUpdated });
  } catch (e) {
    yield put({ type: USER_ERRORS, payload: e.message });
  }
}

function* deleteUser({ id }) {
  try {
    yield call(deleteUserQuery, id);
    yield put({ type: DELETE_USER, payload: id });
  } catch (e) {
    yield put({ type: USER_ERRORS, payload: e.message });
  }
}

/*
  Saga listeners
*/

function* fetchAllUsersSaga() {
  yield takeEvery(GET_USERS_SAGA, getAllUsers);
}

function* createUserSaga() {
  yield takeEvery(CREATE_USER_SAGA, createUser);
}

function* updateUserSaga() {
  yield takeEvery(UPDATE_USER_SAGA, updateUser);
}

function* deleteUserSaga() {
  yield takeEvery(DELETE_USER_SAGA, deleteUser);
}

export default function* rootSaga() {
  yield all([
    fetchAllUsersSaga(),
    createUserSaga(),
    deleteUserSaga(),
    updateUserSaga(),
  ]);
}
