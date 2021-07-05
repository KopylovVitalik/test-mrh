import {
  GET_USERS_SAGA,
  CREATE_USER_SAGA,
  UPDATE_USER_SAGA,
  DELETE_USER_SAGA,
  HIDE_NOTIFICATION
} from "redux/actionTypes/types";

export function getUsers() {
  return { type: GET_USERS_SAGA };
}

export function createUser({ user }) {
  return { type: CREATE_USER_SAGA, user };
}

export function updateUser({ id, user }) {
  return { type: UPDATE_USER_SAGA, id, user };
}

export function deleteUser(id) {
  return { type: DELETE_USER_SAGA, id };
}

export function hideNotification() {
  return { type: HIDE_NOTIFICATION };
}
