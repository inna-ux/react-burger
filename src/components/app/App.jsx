import React from 'react';
import axios from "axios";
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';
import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import appStyles from './app.module.css';
import { useState, useEffect } from 'react';

const Ingredient = 'https://norma.nomoreparties.space/api/ingredients';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const response = await axios.get(Ingredient);
        setData(response.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);



  return (

    <div className={appStyles.app}>

      <AppHeader />

      {!loading &&
        !error &&
        data.length > 0 && (<main className={appStyles.main} >
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </main>)}

      {loading && 'Загрузка...'}

      {error && (
        <div>
          <h2>Сообщение об ошибке:</h2>
          <p>{error.message}</p>
        </div>
      )}

    </div>



  );
}

export default App;
