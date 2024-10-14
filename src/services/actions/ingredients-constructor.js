import { v4 as uuidv4 } from 'uuid';
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const MOVE_INGREDIENTS = "MOVE_INGREDIENTS";
export const RESET_INGREDIENTS = "RESET_INGREDIENTS"; //тип экшена
export const ADD_BUNS = "ADD_BUNS";


// Хранение списка ингредиентов для конструктора бургера. Используется в компоненте BurgerConstructor.


export const addBunsInConstructor = (payload) => ({ type: ADD_BUNS, payload });
export const addIngridient = (item) => {
    return {
        type: ADD_INGREDIENT,
        payload: {
            ...item, 
           id: uuidv4()  
        }
    }
}