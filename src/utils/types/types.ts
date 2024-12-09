import { ICreateUser } from "../../services/actions/user/create-user";
import { TLoginActions } from "../../services/actions/user/set-user";
import { TUpdateUserActions } from "../../services/actions/user/update-user";

export type TIngredient = {
  readonly calories: number;
  readonly carbohydrates: number;
  readonly fat: number;
  readonly image: string;
  readonly image_large: string;
  readonly image_mobile: string;
  readonly name: string;
  readonly price: number;
  readonly proteins: number;
  readonly type: string;
  readonly _id: string;
  readonly id?: string;
};
export type TUserData = {
  
    email: string;
    name: string;
    password?: string;

};


export type TUserState = {
  user: TUserData | null,
  isAuthChecked: boolean,

  registerRequest: boolean,
  registerFailed: boolean,

  loginRequest: boolean,
  loginFailed: boolean,

  logoutUserRequest: boolean,
  logoutUserFailed: boolean,

  updateUserRequest: boolean,
  updateUserFailed: boolean,
}
export type TUserAction = |  ICreateUser | TLoginActions | TUpdateUserActions;

export type TIngredientDetailsInfoState = {
  item: TIngredient | null
}
export type TCurrentOrderState = {
  item: TOrderType | null
}

export type TListIngredientsConstructorState = {
  buns: Array<TIngredient> | [],
  otherIngredients: Array<TIngredient> | []
}

export type TIngredientsDataState = {
  data: Array<TIngredient>,
  loading: boolean,
  error: string | null,
}

export type TOrderNumber = {
  orderNumber: number,
  orderRequest: boolean,
  orderFailed: boolean,
  orderItems: string[] | [],
}


export type TOrderType = {
  _id: string,
  name: string,
  ingredients: Array<string>,
  createdAt: string,
  number: number,
  status: string,
  updatedAt: string
};
export type TWsState = {
  wsConnected: boolean,
  wsError: string,
  orders: Array<TOrderType>,
  total: number,
  totalToday: number
}
export type TWsAuthState = {
  wsAuthConnected: boolean,
  wsAuthError: string,
  authOrders: Array<TOrderType> | null,
}
