import {
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
} from "../../actions/user/create-user";
import {
  GET_USER_FAILED,
  GET_USER_SUCCESS,
  GET_USER_REQUEST,
} from "../../actions/user/get-user";
import {
  LOGIN_REQUEST,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
} from "../../actions/user/login-user";
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILED,
} from "../../actions/user/logout-user";
import {
  REFRESH_TOKEN_FAILED,
  REFRESH_TOKEN_SUCCESS,
  REFRESH_TOKEN_REQUEST,
} from "../../actions/user/refresh-token";
import {
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
} from "../../actions/user/update-user";
import {
  FORGOT_FAILED,
  FORGOT_REQUEST,
  FORGOT_SUCCESS,
} from "../../actions/user/forgot-password";
import {
  RESET_FAILED,
  RESET_REQUEST,
  RESET_SUCCESS,
} from "../../actions/reset-password";

const initialState = {
  user: { name: "", email: "" },
  isAuthorization: false,

  registerRequest: false,
  registerFailed: false,

  getUserRequest: false,
  getUserFailed: false,

  loginRequest: false,
  loginFailed: false,

  logoutUserRequest: false,
  logoutUserFailed: false,

  refreshTokenRequest: false,
  refreshTokenFailed: false,

  updateUserRequest: false,
  updateUserFailed: false,

  forgotRequest: false,
  forgotFailed: false,
  forgotCodeSend: false,

  resetRequest: false,
  resetFailed: false,
  resetSucces: false,
};

export const userReducer = (state = initialState, action) => {
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
        isAuthorization: true,
        user: action.payload.user,
        email: action.payload.email,
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

    case GET_USER_REQUEST: {
      return {
        ...state,
        getUserRequest: true,
        getUserFailed: false,
      };
    }
    case GET_USER_SUCCESS: {
      return {
        ...state,
        isAuthorization: true,
        user: action.payload.user,
        email: action.payload.email,
        getUserRequest: false,
        getUserFailed: false,
      };
    }
    case GET_USER_FAILED: {
      return {
        ...state,
        getUserRequest: false,
        getUserFailed: true,
      };
    }
    case LOGIN_REQUEST: {
      return {
        ...state,
        loginRequest: true,
        loginFailed: false,
      };
    }
    case LOGIN_SUCCESS: {
      return {
        ...state,
        isAuthorization: true,
        user: action.payload.user,
        email: action.payload.email,
        loginRequest: false,
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
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        isAuthorization: false,
        logoutUserRequest: false,
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
    case REFRESH_TOKEN_REQUEST: {
      return {
        ...state,
        refreshTokenRequest: true,
        refreshTokenFailed: false,
      };
    }
    case REFRESH_TOKEN_SUCCESS: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: false,
      };
    }
    case REFRESH_TOKEN_FAILED: {
      return {
        ...state,
        refreshTokenRequest: false,
        refreshTokenFailed: true,
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
        user: action.payload.user,
        email: action.payload.email,
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

    case FORGOT_REQUEST: {
      return {
        ...state,
        forgotRequest: true,
        forgotFailed: false,
        forgotCodeSend: false,
      };
    }
    case FORGOT_SUCCESS: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: false,
        forgotCodeSend: true,
      };
    }
    case FORGOT_FAILED: {
      return {
        ...state,
        forgotRequest: false,
        forgotFailed: true,
        forgotCodeSend: false,
      };
    }

    case RESET_REQUEST: {
      return {
        ...state,
        resetRequest: true,
        resetFailed: false,
        resetSucces: false,
      };
    }
    case RESET_SUCCESS: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: false,
        resetSuccess: true,
      };
    }
    case RESET_FAILED: {
      return {
        ...state,
        resetRequest: false,
        resetFailed: true,
        resetSucces: false,
      };
    }

    default: {
      return state;
    }
  }
};
