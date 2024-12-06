import store from '../../services/store';
import { ThunkAction } from "redux-thunk";
import { Action, ActionCreator } from "redux";
import { TGetOrderActions } from '../../services/actions/order-number';
import { TIngredientsDataActions } from '../../services/actions/ingredients-data';
import { TIngrediensConstructorActions } from '../../services/actions/ingredients-constructor';
import { TDataIngredientDetailsActions } from '../../services/actions/ingredient-details-info';
import { ICreateUser } from '../../services/actions/user/create-user'; 
import { TLoginActions } from '../../services/actions/user/set-user';
import { TUpdateUserActions } from '../../services/actions/user/update-user';
import { TCurrentOrderActions } from '../../services/actions/current-order';
import { TWsActions } from '../../services/actions/websocket';
import { TWsAuthActions } from '../../services/actions/websocket-aurth';


//типизация хранилища - отдельный тип
export type RootState = ReturnType<typeof store.getState>; 

// Типизация всех экшенов приложения
type TApplicationActions = 
| TGetOrderActions
| TIngredientsDataActions
| TIngrediensConstructorActions
| TIngredientsDataActions
| TLoginActions
| TUpdateUserActions
|ICreateUser
| TDataIngredientDetailsActions
| TCurrentOrderActions
| TWsActions
| TWsAuthActions
;

// Типизация thunk'ов в нашем приложении
export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TApplicationActions>
>; 

// Типизация метода dispatch для проверки на валидность отправляемого экшена
export type AppDispatch = typeof store.dispatch; 