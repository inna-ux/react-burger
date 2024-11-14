import { login, getUser, logoutUser } from "../../../utils/api";
import { setCookie, removeCookie } from "../../../utils/cooke";
export const SET_AUTH_CHECKED = "SET_AUTH_CHECKED";
export const SET_USER = "SET_USER";
export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_FAILED = "GET_USER_FAILED";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_FAILED = "LOGIN_FAILED";
export const LOGOUT_REQUEST = "LOGOUT_REQUEST";
export const LOGOUT_FAILED = "LOGOUT_FAILED";

export const setAuthChecked = (value) => ({
  type: SET_AUTH_CHECKED,
  payload: value,
});

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const loginAction = (email, password) => (dispatch) => {
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
