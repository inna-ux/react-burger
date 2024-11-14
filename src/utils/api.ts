import { getCookie, setCookie } from "./cooke";
const Ingredient = "https://norma.nomoreparties.space/api";

export function getIngredients() {
  return fetch(`${Ingredient}/ingredients`).then((res) => checkResponse(res));
}
const checkResponse = (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export function postOrderData(orderData: string[]) {
  return fetch(`${Ingredient}/orders`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      authorization: `${getCookie("accessToken")}`,
    },
    body: JSON.stringify({
      ingredients: orderData,
    }),
  }).then((res) => checkResponse(res));
}

//запрос на получение письма для сброса пароля
export function forgotPassword(email: string) {
  return fetch(`${Ingredient}/password-reset`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: `${email}`,
    }),
  }).then((res) => checkResponse(res));
}

//запрос на обновление пароля
export function resetPassword(password: string, token: string) {
  return fetch(`${Ingredient}/password-reset/reset`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      password: `${password}`,
      token: `${token}`,
    }),
  }).then((res) => checkResponse(res));
}

//создание пользователя
export function user(email: string, password: string, name: string) {
  return fetch(`${Ingredient}/auth/register`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      name: `${name}`,
    }),
  }).then((res) => checkResponse(res));
}

//авторизация
export function login(email: string, password: string) {
  return fetch(`${Ingredient}/auth/login`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
  }).then((res) => checkResponse(res));
}

//получение данных пользователя

export const getUser = () => {
  return fetch(`${Ingredient}/auth/user`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: `${getCookie("accessToken")}`,
    },
  })
    .then(checkResponse)
    .catch((err) => {
      if (err.message === "jwt expired") {
        refreshToken().then((res) => {
          setCookie("accessToken", res.accessToken);
          localStorage.setItem("refreshToken", res.refreshToken);
          fetch(`${Ingredient}/auth/user`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `${getCookie("accessToken")}`,
            },
          }).then(checkResponse);
        });
      } else {
        return Promise.reject(err);
      }
    });
};

//обновление данных пользователя через профиль
export function updateUser(name: string, email: string, password: string) {
  return fetch(`${Ingredient}/auth/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      authorization: `${getCookie("accessToken")}`,
    },
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
      name: `${name}`,
    }),
  }).then((res) => checkResponse(res));
}

//обновление токена
export const refreshToken = () => {
  return fetch(`${Ingredient}/auth/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: localStorage.getItem("refreshToken") || "",
    },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then((res) => checkResponse(res));
};
//логаут
export function logoutUser() {
  return fetch(`${Ingredient}/auth/logout`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({ token: localStorage.getItem("refreshToken") }),
  }).then((res) => checkResponse(res));
}
