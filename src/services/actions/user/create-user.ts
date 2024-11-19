import { user } from "../../../utils/api";
import { setCookie } from "../../../utils/cooke";

export const REGISTER_REQUEST: "REGISTER_REQUEST" = "REGISTER_REQUEST";
export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS";
export const REGISTER_FAILED: "REGISTER_FAILED" = "REGISTER_FAILED";

const userAction = (email, password, name) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });
  user(email, password, name)
    .then((res) => {
      if (res && res.success) {
        setCookie("accessToken", res.accessToken, { expires: 1200 });
        localStorage.setItem("refreshToken", res.refreshToken);
        dispatch({ type: REGISTER_SUCCESS, payload: res.user });
      } else {
        dispatch({ type: REGISTER_FAILED });
      }
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAILED, payload: err.message });
    });
};

export default userAction;
