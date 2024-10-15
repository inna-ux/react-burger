
import { useSelector } from "react-redux";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients.jsx";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor.jsx";
import styles from "./home.module.css";

function HomePage() {
  const { loading, error, data } = useSelector(
    (store) => store.listIngredients
  );

  return (
    <>
      {!loading && !error && data.length > 0 && (
        <main className={styles.main}>
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
    </>
  );
}

export default HomePage;
