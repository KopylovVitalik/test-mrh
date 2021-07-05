import {
  GET_USERS,
  CREATE_USER,
  UPDATE_USER,
  DELETE_USER,
  USER_ERRORS,
  GET_USERS_ERROR,
  HIDE_NOTIFICATION,
} from "redux/actionTypes/types";

const initialState = {
  usersList: [],
  loading: true,
  alert: { show: false },
};

function userReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_USERS:
      return {
        ...state,
        usersList: payload,
        loading: false,
      };
    case CREATE_USER:
      return {
        ...state,
        usersList: [...state.usersList, payload],
        loading: false,
        alert: {
          show: true,
          type: "success",
          text: "User was created",
        },
      };
    case DELETE_USER:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== payload),
        loading: false,
        alert: {
          show: true,
          type: "secondary",
          text: "User was deleted",
        },
      };
    case UPDATE_USER:
      return {
        ...state,
        usersList: state.usersList.map((user) => {
          return user.id === payload.id ? { ...payload } : user;
        }),
        loading: false,
        alert: {
          show: true,
          type: "success",
          text: "User was updated",
        },
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        usersList: [],
        loading: false,
        alert: {
          show: true,
          type: "danger",
          text: "There were problems getting users",
        },
      };
    case USER_ERRORS:
      return {
        ...state,
        loading: false,
        alert: {
          show: true,
          type: "danger",
          text: "There were problems with this action",
        },
      };
    case HIDE_NOTIFICATION: {
      return {
        ...state,
        alert: {
          show: false,
          type: "",
          text: "",
        },
      };
    }
    default:
      return state;
  }
}

export default userReducer;
