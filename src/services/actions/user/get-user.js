import { getUser } from "../../../utils/api";
import refreshTokenAction from "./refresh-token";

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

const getUserAction = () => (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST
  });
  getUser()
    .then(res => { dispatch({ type: GET_USER_SUCCESS, payload: res.user }) })
    .catch(() => {
      const token = localStorage.getItem('refreshToken');
      if (token) {
        dispatch(refreshTokenAction());
        getUser()
          .then((res) => {
            dispatch({ type: GET_USER_SUCCESS, payload: res.user })
          })
      } else { dispatch({ type: GET_USER_FAILED }) }
    })
}



export default getUserAction;