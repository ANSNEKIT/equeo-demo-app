import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const mock = new MockAdapter(axios);

mock.onGet("/shop/products").reply(200, {
  success: {
    products: [
      {
        id: 1,
        image:
          "https://ekvio.ru/content/70/files/8f/8fb907a2a59e11ea988ce280a25fb977.png",
        name: "Яндекс.Плюс (1 месяц)",
        price: 20,
        is_hit: 1,
        available_till: 1640980799,
        available_count: 0,
      },
      {
        id: 2,
        image:
          "https://ekvio.ru/content/70/files/8f/8fb907a2a59e11ea988ce280a25fb977.png",
        name: "Яндекс.Плюс (3 месяца)",
        price: 60,
        is_hit: 1,
        available_till: 1640980799,
        available_count: 0,
      },
      {
        id: 3,
        image:
          "https://ekvio.ru/content/70/files/77/776e30cea62911ea9e13d289d494c70e-site-800-800.png",
        name: "Оплата мобильной связи (200 руб.)",
        price: 20,
        is_hit: 1,
        available_till: 1640980799,
        available_count: 0,
      },
      {
        id: 4,
        image:
          "https://ekvio.ru/content/70/files/9f/9f89c29e9e9911eb9af43ab252a68a4a.png",
        name: "Мосигра (500 руб.)",
        price: 50,
        is_hit: 0,
        available_till: 1640980799,
        available_count: 0,
      },
      {
        Id: 5,
        image:
          "https://ekvio.ru/content/70/files/77/776e30cea62911ea9e13d289d494c70e-site-800-800.png",
        name: "Оплата мобильной связи (500 руб.)",
        price: 50,
        is_hit: 1,
        available_till: 1672520399,
        available_count: 0,
      },
      {
        id: 6,
        image:
          "https://ekvio.ru/content/70/files/27/274e0b7c9e9a11ebb298868627639db9.png",
        name: "Леонардо (300 руб.)",
        price: 30,
        is_hit: 0,
        available_till: 1672520399,
        available_count: 0,
      },
      {
        id: 7,
        image:
          "https://ekvio.ru/content/70/files/55/556692269e9b11eb90103ab252a68a4a.png",
        name: "Золотое Яблоко (1000 руб.)",
        price: 100,
        is_hit: 0,
        available_till: 1672520399,
        available_count: 0,
      },
      {
        id: 8,
        image:
          "https://ekvio.ru/content/70/files/3f/3fc994e0a5a911eaad9f8e0b4e7b6530.jpeg",
        name: "Ozon.ru (1000 руб.)",
        price: 100,
        is_hit: 0,
        available_till: 1672520399,
        available_count: 0,
      },
    ],
  },
});

export default axios;
