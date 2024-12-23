
import {
    TypedUseSelectorHook,
    useSelector as selectorHook,
    useDispatch as dispatchHook,
  } from 'react-redux';
  import { AppDispatch, AppThunk, RootState } from './index';
  
  // Теперь этот хук «знает» структуру хранилища
  export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
  
  // Хук не даст отправить экшен, который ему не знаком
  type AppDispatchFunc = () => AppDispatch | AppThunk;
  export const useDispatch: AppDispatchFunc = dispatchHook;