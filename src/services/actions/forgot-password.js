import { forgotPassword } from "../../utils/api";

export const FORGOT_REQUEST = 'FORGOT_REQUEST';
export const FORGOT_SUCCESS = 'FORGOT_SUCCESS';
export const FORGOT_FAILED = 'FORGOT_FAILED';

const forgotAction = (email) => (dispatch) => {
  dispatch({
    type: FORGOT_REQUEST
  });
  forgotPassword(email)
    .then(res => {
      if (res && res.success) {
        dispatch({
             type: FORGOT_SUCCESS,
             payload: res
             });
      }
      else {
        dispatch({ type: FORGOT_FAILED })
      }
    })
    .catch((err) => {
      dispatch({ type: FORGOT_FAILED, payload: err.message })
    })
}

export default forgotAction;