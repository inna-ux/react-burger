import { login, getUser, logoutUser } from "../../../utils/api";
import { setCookie, removeCookie } from "../../../utils/cooke";
import { TUserData } from "../../../utils/types";

export const SET_AUTH_CHECKED: "SET_AUTH_CHECKED" = "SET_AUTH_CHECKED";
export const SET_USER: "SET_USER" = "SET_USER";
export const GET_USER_REQUEST: "GET_USER_REQUEST" = "GET_USER_REQUEST";
export const GET_USER_FAILED: "GET_USER_FAILED" = "GET_USER_FAILED";
export const LOGIN_REQUEST: "LOGIN_REQUEST" = "LOGIN_REQUEST";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";
export const LOGOUT_REQUEST: "LOGOUT_REQUEST" = "LOGOUT_REQUEST";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";

//типизация экшенов 
export interface ILoginRequest {
  readonly type: typeof LOGIN_REQUEST
}

export interface ILoginFailed{
  readonly type: typeof LOGIN_FAILED
}

export interface ILogoutRequest {
  readonly type: typeof LOGOUT_REQUEST
}

export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED
}

export interface IGetUserRequest {
  readonly type: typeof GET_USER_REQUEST
}

export interface IGetUserFailed {
  readonly type: typeof GET_USER_FAILED
}

export interface ISetAuthChecked {
  readonly type: typeof SET_AUTH_CHECKED;
 payload: boolean
}

export interface ISetUser {
  readonly type: typeof SET_USER;
  payload: TUserData 
}

// Объединение типов
export type TLoginActions = 
  | ILoginRequest
  | ILoginFailed
  | ILogoutRequest
  | ILogoutFailed
  | IGetUserRequest
  | IGetUserFailed
  | ISetAuthChecked
  | ISetUser;

// типизация Генераторов экшенов
export const setAuthChecked = (value: boolean): ISetAuthChecked => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user: TUserData): ISetUser => ({
  type: SET_USER,
  payload: user,
});
//Типизация thunk-экшенов
export const loginAction = (email: string, password: string) => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST,
  });
  login(email, password)
    .then((res) => {
      if (res && res.success) {
        setCookie("accessToken", res.accessToken, { expires: 1200 });
        localStorage.setItem("refreshToken", res.refreshToken);
        localStorage.setItem("userName", res.user.name);
        dispatch(setUser(res.user));
        dispatch(setAuthChecked(true));
      }
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: err.message,
      });
    });
};

export const checkUserAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem("refreshToken")) {
      getUser()
        .then((res) => dispatch(setUser(res.user)))
        .catch(() => {
          removeCookie("accessToken");
          localStorage.removeItem("refreshToken");
          dispatch(setUser(null));
        })
        .finally(() => dispatch(setAuthChecked(true)));
    } else {
      dispatch(setAuthChecked(true));
    }
  };
};
export const logoutUserAction = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  logoutUser()
    .then((res) => {
      if (res && res.success) {
        removeCookie("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser(null));
      }
    })
    .catch(() => {
      dispatch({ type: LOGOUT_FAILED });
    });
};
