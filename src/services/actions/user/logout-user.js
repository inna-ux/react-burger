import { removeCookie } from "../../../utils/cooke";
import { logoutUser } from "../../../utils/api";

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILED = 'LOGOUT_FAILED';

const logoutUserAction = () => (dispatch) => {
  dispatch({ type: LOGOUT_REQUEST });
  logoutUser()
    .then(res => {
      if (res && res.success) {
        removeCookie('accessToken');
        localStorage.removeItem('refreshToken');
        dispatch({ type: LOGOUT_SUCCESS })
      }
      else {
        dispatch({ type: LOGOUT_FAILED })
      }
    })
    .catch(() => {
      dispatch({ type: LOGOUT_FAILED })
    })
}


export default logoutUserAction;