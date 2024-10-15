import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import AppHeader from "../app-header/app-header.jsx";
import appStyles from "./app.module.css";
import { getIngredientsData } from "../../services/actions/ingredients-data.js";
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import HomePage from "../../pages/home/home.jsx";
import IngredientsDetails from "../ingredient-details/ingredient-details.jsx";
import { Modal } from "../modal/modal.jsx";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };


  const background = location.state && location.state.background;
 
  useEffect(() => {
    dispatch(getIngredientsData());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes location={background || location}>
      <Route path="/" element={<HomePage />} />
      <Route path='/ingredients/:id'
               element={<IngredientsDetails />} />
      </Routes>

      {background && (
        <Routes>
	        <Route
	          path='/ingredients/:id'
	          element={
	            <Modal title={"Детали ингредиента"} onClose={handleModalClose}>
	              <IngredientsDetails />
	            </Modal>
	          }
	        />
        </Routes>
      )}

      
    </div>
  );
}

export default App;
