import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from "../burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../burger-constructor/burger-constructor.jsx";
import appStyles from "./app.module.css";
import { getIngredientsData } from "../../services/actions/ingredients-data.js";

function App() {
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector(
    (store) => store.listIngredients
  );
  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <AppHeader />

      {!loading && !error && data.length > 0 && (
        <main className={appStyles.main}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients />
            <BurgerConstructor />
          </DndProvider>
        </main>
      )}
      {error && (
        <div>
          <h2>Сообщение об ошибке:</h2>
          <p>{error}</p>
        </div>
      )}
      {loading && "Загрузка..."}
    </div>
  );
}

export default App;
