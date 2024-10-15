const Ingredient = "https://norma.nomoreparties.space/api";

export function getIngredients() {
  return fetch(`${Ingredient}/ingredients`).then((res) => checkResponse(res));
}
const checkResponse = (res) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
};

export function postOrderData(orderData) {
  return fetch(`${Ingredient}/orders`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      ingredients: orderData,
    }),
  }).then((res) => checkResponse(res));
}
