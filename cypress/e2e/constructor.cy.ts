import type {} from "cypress";
import type {} from "../support/cypress";

const text = 'Детали ингредиента';
const titleCard = 'Краторная булка N-200i';
const titleTwoCard = "Соус Spicy-X";
const ingredientSelector = "[data-cy=ingredient]";
const constructorSelector = "[data-cy=container]";

describe("открытие-закрытие модалки", function () {
  beforeEach(() => {
    cy.make();
  });
  it("должно показать и спрятать ингредиент", () => {
    cy.contains(text).should("not.exist");
    cy.get(ingredientSelector).contains(titleCard).click();
    cy.contains(text).should("exist");
    cy.get("[data-cy=modal]")
      .contains(titleCard)
      .should("exist");
  });
  it("закрывается при клике на крестик", () => {
    cy.contains(titleCard).click();
    cy.contains(text).should("exist");
    cy.get("[data-cy=svg]").click();
    cy.contains(text).should("not.exist");
  });
});

describe("функциональность перетаскивания ингредиента, создания заказа", function () {
  beforeEach(() => {
    cy.prepare();
  });
  it("сборка бургера для заказа и нажатие на кнопку заказа", () => {
    cy.get(constructorSelector).as("constructorDropArea");
    cy.get(ingredientSelector).contains(titleCard).as("bun");
    cy.get("@bun").trigger("dragstart");
    cy.get("@constructorDropArea").trigger("drop");
    cy.get(ingredientSelector).contains(titleTwoCard).as("souse");
    cy.get("@souse").trigger("dragstart");
    cy.get("@constructorDropArea").trigger("drop");
    cy.get("[data-cy=button]").contains("Оформить заказ").click();
    cy.get("[data-cy=order-number]").contains("62760").should("exist");
    cy.get("[data-cy=svg]").click();
    cy.get("[data-cy=order-number]").should("not.exist");
    cy.get("@constructorDropArea")
      .contains(titleCard)
      .should("not.exist");
    cy.get("@constructorDropArea").contains(titleTwoCard).should("not.exist");
  });
});
