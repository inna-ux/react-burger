import { login } from "../../../utils/api";
import { setCookie } from "../../../utils/cooke";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';



const loginAction = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_REQUEST
  });
  login(email, password)
    .then(res => {
      if (res && res.success) {
        setCookie('accessToken', res.accessToken, { expires: 1200 });
        localStorage.setItem('refreshToken', res.refreshToken);
        dispatch({
             type: LOGIN_SUCCESS,
             payload: res.user 
             })
      }
      else {
        dispatch({ type: LOGIN_FAILED })
      }
    })
    .catch((err) => {
      dispatch({ 
        type: LOGIN_FAILED,
         payload: err.message,
         })
    })
}



export default loginAction;