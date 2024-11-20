import {
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../../actions/user/create-user.js";

import {
  SET_AUTH_CHECKED,
  SET_USER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
} from "../../actions/user/set-user.js";
import {
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
} from "../../actions/user/update-user.js";
import { TUserState, TUserAction } from "../../../utils/types.js";


const initialState: TUserState = {
  user: null,
  isAuthChecked: false,

  registerRequest: false,
  registerFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutUserRequest: false,
  logoutUserFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,
};

export const userReducer = (state = initialState, action: TUserAction) => {
  switch (action.type) {
    case REGISTER_REQUEST: {
      return {
        ...state,
        registerRequest: true,
        registerFailed: false,
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        isAuthChecked: true,

        user: action.payload,

        registerRequest: false,
        registerFailed: false,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        registerRequest: false,
        registerFailed: true,
      };
    }
    case SET_AUTH_CHECKED:
      return {
        ...state,
        isAuthChecked: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }

    case LOGIN_FAILED: {
      return {
        ...state,
        loginRequest: false,
        loginFailed: true,
      };
    }
    case LOGOUT_REQUEST: {
      return {
        ...state,
        logoutUserRequest: true,
        logoutUserFailed: false,
      };
    }

    case LOGOUT_FAILED: {
      return {
        ...state,
        logoutUserRequest: false,
        logoutUserFailed: true,
      };
    }
    case UPDATE_USER_REQUEST: {
      return {
        ...state,
        updateUserRequest: true,
        updateUserFailed: false,
      };
    }
    case UPDATE_USER_SUCCESS: {
      return {
        ...state,

        user: action.payload,
        updateUserRequest: false,
        updateUserFailed: false,
      };
    }
    case UPDATE_USER_FAILED: {
      return {
        ...state,
        updateUserRequest: false,
        updateUserFailed: true,
      };
    }

    default: {
      return state;
    }
  }
};
