import { user } from "../../../utils/api";
import { setCookie } from "../../../utils/cooke";
import { TUserData } from "../../../utils/types";

export const REGISTER_REQUEST: "REGISTER_REQUEST" = "REGISTER_REQUEST";
export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS";
export const REGISTER_FAILED: "REGISTER_FAILED" = "REGISTER_FAILED";

//типизация экшенов
export interface IUserRegisterRequest {
  readonly type: typeof REGISTER_REQUEST;
}

export interface IUserRegisterFailed {
  readonly type: typeof REGISTER_FAILED;
}

export interface IUserRegisterSuccess {
  readonly type: typeof REGISTER_SUCCESS;
  user: TUserData
}

// Объединение типов
export type ICreateUser =  | IUserRegisterRequest | IUserRegisterFailed | IUserRegisterSuccess;

//Типизация thunk-экшенов
const userAction = (email: string, password: string, name: string) => (dispatch) => {
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
