import { userReducer, initialState } from "./user-reducers";
import {
  REGISTER_REQUEST,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  ICreateUser,
} from "../../actions/user/create-user";
import {
  SET_AUTH_CHECKED,
  SET_USER,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGOUT_FAILED,
  LOGOUT_REQUEST,
  TLoginActions,
} from "../../actions/user/set-user";
import {
  UPDATE_USER_FAILED,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_REQUEST,
  TUpdateUserActions,
} from "../../actions/user/update-user";

import { TUserData } from "../../../utils/types/types";

const user: TUserData = {
  email: "bob@example.com",
  name: "TestName",
  password: "пароль",
};
type TUser = TLoginActions | TUpdateUserActions | ICreateUser;
describe("Redux store and actions", () => {
  it("should return the initial state", () => {
    expect(userReducer(undefined, {} as TUser)).toEqual(initialState);
  });
  it("register request", () => {
    const action = { type: REGISTER_REQUEST };
    const state = userReducer(initialState, action);
    expect(state).toStrictEqual({ ...initialState, registerRequest: true });
  });
  it("register success", () => {
    const action = { type: REGISTER_SUCCESS, payload: user };
    const state = userReducer(initialState, action);
    expect(state).toStrictEqual({
      ...initialState,
      isAuthChecked: true,
      user: user,
    });
  });
  it("register failed", () => {
    const action = { type: REGISTER_FAILED };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, registerFailed: true });
  });
  it("set auth checked", () => {
    const action = { type: SET_AUTH_CHECKED, payload: true };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, isAuthChecked: true });
  });
  it("set user", () => {
    const action = { type: SET_USER, payload: user };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, user: user });
  });
  it("login requestr", () => {
    const action = { type: LOGIN_REQUEST };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loginRequest: true });
  });
  it("login failed", () => {
    const action = { type: LOGIN_FAILED };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, loginFailed: true });
  });
  it("logout request", () => {
    const action = { type: LOGOUT_REQUEST };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, logoutUserRequest: true });
  });
  it("logout failed", () => {
    const action = { type: LOGOUT_FAILED };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, logoutUserFailed: true });
  });
  it("update user request", () => {
    const action = { type: UPDATE_USER_REQUEST };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, updateUserRequest: true });
  });
  it("update user success", () => {
    const action = { type: UPDATE_USER_SUCCESS, payload: user };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, user: user });
  });
  it("update user failed", () => {
    const action = { type: UPDATE_USER_FAILED };
    const state = userReducer(initialState, action);
    expect(state).toEqual({ ...initialState, updateUserFailed: true });
  });
});
