import React from 'react';
import AppHeader from "../app-header/app-header.jsx";
import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx'
import appStyles from './app.module.css';
import { useFetch } from  '../../usefetch/usefetch.js'


const apiUrlIngredients = 'https://norma.nomoreparties.space/api/ingredients';
function App() {
  const { data } = useFetch(apiUrlIngredients);
  const ingredients = data?.data;


  
  return (

    <div className={appStyles.app}>

      <AppHeader />

      <main className={appStyles.main} >

        
            <BurgerIngredients  ingredients={ingredients} />         
      </main>

    </div>



  );
}

export default App;

