import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "../../utils/types/hook";
import AppHeader from "../app-header/app-header";
import appStyles from "./app.module.css";
import { getIngredientsData } from "../../services/actions/ingredients-data";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import HomePage from "../../pages/home/home";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import { Modal } from "../modal/modal";
import Login from "../../pages/login/login";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Register from "../../pages/register/register";
import { NotFound404 } from "../../pages/not-found/not-found";
import { checkUserAuth } from "../../services/actions/user/set-user";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import Profile from "../../pages/profile/profile";
import Feed from "../../pages/feed/feed";
import OrderInfoDetails from "../order-info-details/order-info-details";
import Order from "../../pages/order/order";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const handleModalClose = () => {
    // Возвращаемся к предыдущему пути при закрытии модалки
    navigate(-1);
  };

  const background = location.state && location.state.background;
  const { orders } = useSelector(state => state.wsFeedOrders);

  useEffect(() => {
    
    dispatch(checkUserAuth());
  }, [dispatch]);

  useEffect(() => {
  
    dispatch(getIngredientsData());
  }, [dispatch]);

  return (
    <div className={appStyles.app}>
      <AppHeader />
      <Routes location={background || location}>
        <Route path="/" element={<HomePage />} />
        <Route path="/feed" element={<Feed />}/>
        <Route path="/feed/:id" element={<Order data={orders} profile={false} />} />
        <Route path="/login" element={<OnlyUnAuth component={<Login />} />} />
        <Route
          path="/register"
          element={<OnlyUnAuth component={<Register />} />}
        />
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
        <Route
          path="/forgot-password"
          element={<OnlyUnAuth component={<ForgotPassword />} />}
        />
        <Route
          path="/reset-password"
          element={<OnlyUnAuth component={<ResetPassword />} />}
        />
        <Route path="/ingredients/:id" element={<IngredientsDetails />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>

      {background && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal title={"Детали ингредиента"} onClose={handleModalClose}>
                <IngredientsDetails />
              </Modal>
            }
          />
           <Route
            path="/feed/:id"
            element={
              <Modal title={""} onClose={handleModalClose}>
                <OrderInfoDetails data={orders} modal={true}/>
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
