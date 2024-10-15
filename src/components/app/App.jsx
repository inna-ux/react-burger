import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header.jsx";
import appStyles from "./app.module.css";
import { getIngredientsData } from "../../services/actions/ingredients-data.js";
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from "../../pages/home/home.jsx";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;
 
  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes location={background || location}>
      <Route path="/" element={<HomePage />} />
      </Routes>

      
    </div>
  );
}

export default App;
