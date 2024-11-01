import { resetPassword } from "../../../utils/api";

export const RESET_REQUEST = 'RESET_REQUEST';
export const RESET_SUCCESS = 'RESET_SUCCESS';
export const RESET_FAILED = 'RESET_FAILED';

const resetAction = (password, token) => (dispatch) => {
  dispatch({
    type: RESET_REQUEST
  });
  resetPassword(password, token)
    .then(res => {
      if (res && res.success) {
        dispatch({ type: RESET_SUCCESS });
      }
      else {
        dispatch({ type: RESET_FAILED })
      }
    })
    .catch((err) => {
      dispatch({ type: RESET_FAILED, payload: err.message })
    })
}

export default resetAction;