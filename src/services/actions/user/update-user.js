import { refreshToken, updateUser } from "../../../utils/api";
import { setCookie } from "../../../utils/cooke";

export const UPDATE_USER_REQUEST = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED = "UPDATE_USER_FAILED";

const updateUserAction = (name, email, password) => (dispatch) => {
  dispatch({
    type: UPDATE_USER_REQUEST,
  });
  updateUser(name, email, password)
    .then((res) => {
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.user });
    })
    .catch(() => {
      const token = localStorage.getItem("refreshToken");
      if (token) {
        refreshToken().then((res) => {
          if (res && res.success) {
            setCookie("accessToken", res.accessToken, { expires: 1200 });
            localStorage.setItem("refreshToken", res.refreshToken);
            updateUser(name, email, password).then((res) => {
              dispatch({ type: UPDATE_USER_SUCCESS, payload: res.user });
            });
          }
        });
      } else {
        dispatch({ type: UPDATE_USER_FAILED });
      }
    });
};

export default updateUserAction;
