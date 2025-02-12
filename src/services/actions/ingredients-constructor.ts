import { v4 as uuidv4 } from 'uuid';
import { TIngredient } from '../../utils/types/types';
export const ADD_INGREDIENT: "ADD_INGREDIENT" = "ADD_INGREDIENT";
export const DELETE_INGREDIENT: "DELETE_INGREDIENT" = "DELETE_INGREDIENT";
export const MOVE_INGREDIENTS: "MOVE_INGREDIENTS" = "MOVE_INGREDIENTS";
export const RESET_INGREDIENTS: "RESET_INGREDIENTS" = "RESET_INGREDIENTS"; //тип экшена
export const ADD_BUNS: "ADD_BUNS" = "ADD_BUNS";

//типизация экшенов
export interface IAddIngredient {
    readonly type: typeof ADD_INGREDIENT;
    payload: TIngredient
  }
  
  export interface IDeleteIngredient {
    readonly type: typeof DELETE_INGREDIENT;
    item: TIngredient
  }
  
 
  
  export interface IIngredientMove {
    readonly type: typeof MOVE_INGREDIENTS;
    item: TIngredient,
    dragIndex: number,
    hoverIndex: number
  }
  
  export interface IAddBuns {
    readonly type: typeof ADD_BUNS;
    payload: Array<TIngredient>
  }
  
  export interface IResetIngredient {
    readonly type: typeof RESET_INGREDIENTS;
  }
  
  // Объединение типов
  export type TIngrediensConstructorActions = 
    | IAddIngredient
    | IDeleteIngredient
    | IIngredientMove
    | IAddBuns
    | IResetIngredient
    ;

// Хранение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor.
// Генераторы экшенов
export const addBunsInConstructor = (payload: Array <TIngredient>) => ({ type: ADD_BUNS, payload });
export const addIngridient = (item: TIngredient): IAddIngredient => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            ...item, 
           id: uuidv4()  
        }
    }
}