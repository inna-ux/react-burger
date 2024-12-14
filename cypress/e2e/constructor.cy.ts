import type {} from "cypress";
import type {} from "../support/cypress";

describe("открытие-закрытие модалки", function () {
  beforeEach(() => {
    cy.make();
  });
  it("должно показать и спрятать ингредиент", () => {
    cy.contains("Детали ингредиента").should("not.exist");
    cy.get("[data-cy=ingredient]").contains("Краторная булка N-200i").click();
    cy.contains("Детали ингредиента").should("exist");
    cy.get("[data-cy=modal]")
      .contains("Краторная булка N-200i")
      .should("exist");
  });
  it("закрывается при клике на крестик", () => {
    cy.contains("Краторная булка N-200i").click();
    cy.contains("Детали ингредиента").should("exist");
    cy.get("[data-cy=svg]").click();
    cy.contains("Детали ингредиента").should("not.exist");
  });
});

describe("функциональность перетаскивания ингредиента, создания заказа", function () {
  beforeEach(() => {
    cy.prepare("blinovainna464@gmail.com", "ulebez666");
  });
  it("сборка бургера для заказа и нажатие на кнопку заказа", () => {
    cy.get("[data-cy=container]").as("constructorDropArea");
    cy.get("[data-cy=ingredient]").contains("Краторная булка N-200i").as("bun");
    cy.get("@bun").trigger("dragstart");
    cy.get("@constructorDropArea").trigger("drop");
    cy.get("[data-cy=ingredient]").contains("Соус Spicy-X").as("souse");
    cy.get("@souse").trigger("dragstart");
    cy.get("@constructorDropArea").trigger("drop");
    cy.get("[data-cy=button]").contains("Оформить заказ").click();
    cy.get("[data-cy=order-number]").contains("62760").should("exist");
    cy.get("[data-cy=svg]").click();
    cy.get("[data-cy=order-number]").should("not.exist");
    cy.get("@constructorDropArea")
      .contains("Краторная булка N-200i")
      .should("not.exist");
    cy.get("@constructorDropArea").contains("Соус Spicy-X").should("not.exist");
  });
});
