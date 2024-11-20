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
  accessToken: string;
  refreshToken: string;
  success: boolean;
  user: {
    email: string;
    name: string;
    password?: string;
  };
};

