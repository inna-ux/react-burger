import { getUser } from "../../../utils/api";

export const GET_USER_REQUEST = "GET_USER_REQUEST";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_FAILED = "GET_USER_FAILED";

const getUserAction = () => (dispatch) => {
  dispatch({
    type: GET_USER_REQUEST,
  });
  getUser()
    .then((res) => {
      localStorage.setItem("userName", res.user.name);
      dispatch({
        type: GET_USER_SUCCESS,
        payload: res.user,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_USER_FAILED,
      });
    });
};

export default getUserAction;
