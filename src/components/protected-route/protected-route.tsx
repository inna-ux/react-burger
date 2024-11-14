import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { Preloader } from "../preloader/preloader";
type TProtectedRouteProps = {
  component: JSX.Element,
  onlyUnAuth?: boolean
}

const Protected = ({ onlyUnAuth = false, component }: TProtectedRouteProps) => {
  // isAuthChecked это флаг, показывающий что проверка токена произведена
  // при этом результат этой проверки не имеет значения, важно только,
  // что сам факт проверки имел место.
   // @ts-ignore
  const isAuthChecked = useSelector((store) => store.user.isAuthChecked);
   // @ts-ignore
  const user = useSelector((store) => store.user.user);
  const location = useLocation();

  if (!isAuthChecked) {
    // Запрос еще выполняется
    // Выводим прелоадер в ПР
    return <Preloader />;
  }

  if (onlyUnAuth && user) {
    // Пользователь авторизован, но роут предназначен для неавторизованного пользователя
    // Делаем редирект на главную страницу или на тот адрес, что записан в location.state.from
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  // !onlyUnAuth && user Пользователь авторизован и роут для авторизованного пользователя

  return component;
};

export const OnlyAuth = Protected;
export const OnlyUnAuth = ({ component}: TProtectedRouteProps) => (
  <Protected onlyUnAuth={true} component={component} />
);

