import { refreshToken, updateUser } from "../../../utils/api";
import { setCookie } from "../../../utils/cooke";
import { TUserData } from "../../../utils/types";

export const UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST" = "UPDATE_USER_REQUEST";
export const UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS" = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILED: "UPDATE_USER_FAILED" = "UPDATE_USER_FAILED";
//типизация экшенов
export interface IUpdateUserRequest {
  readonly type: typeof UPDATE_USER_REQUEST;
}
export interface IUpdateUserSuccess {
  readonly type: typeof UPDATE_USER_SUCCESS;
  user: TUserData
}
export interface IUpdateUserFailed {
  readonly type: typeof UPDATE_USER_FAILED;
}
// Объединение типов
export type TUpdateUserActions = | IUpdateUserRequest | IUpdateUserSuccess | IUpdateUserFailed;

//Типизация thunk-экшенов
const updateUserAction = (name: string, email: string, password: string) => (dispatch) => {
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
