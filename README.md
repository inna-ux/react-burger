# **Проектная работа «Stellar Burger»**

[![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Webpack](https://img.shields.io/badge/webpack-2b3a42.svg?style=for-the-badge&logo=webpack&logoColor=84c7e8)](https://webpack.js.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)](https://react-redux.js.org/)
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](https://reactrouter.com/en/main)
[![Rest API](https://img.shields.io/badge/rest_api-%2320232a.svg?style=for-the-badge&logo=rest&logoColor=white)](https://ru.wikipedia.org/wiki/REST)
[![WebSocket API](https://img.shields.io/badge/WebSocket_API-FF6C37?style=for-the-badge&logo=websocket&logoColor=white)](https://ru.wikipedia.org/wiki/WebSocket)

## Описание
“Stellar-burger” - бургерная, проект использовался для отработки навыков работы с Redux, TypeScript и WebSocket. Содержит конструктор бургеров, где осуществлена работа библиотеки React-DnD, ленту заказов с обновлением в реальном времени, регистрацию/авторизацию с личным кабинетом. Приложение адаптировано для разрешения экрана 1280px и выше.
В приложении есть возможность:
- Добавлять, удалять, комбинировать ингредиенты для создания заказа с помощью Drag&Drop. 
- Для пользователя есть возможность создать аккаунт, изменить данные в личном кабинете, авторизоваться, выйти из учетной записи. 
- После авторизации и создания заказа пользователь может просматривать свои заказы и подробности заказа в личном кабинете в разделе история заказов в реальном времени с помощью WebSocket соединения. 
- Неавторизованному пользователю доступна лента общих заказов в реальном времени с помощью WebSocket соединения. 
- Пользователь может изменить пароль или запросить восстановление пароля для входа в личныйкабинет. 
_____

## Тесты

1  е2е тесты написаны с использованием Cypress  
2  Юнит-тесты написаны с использованием jest

## Адрес:
https://burger.students.nomorepartiesco.ru
