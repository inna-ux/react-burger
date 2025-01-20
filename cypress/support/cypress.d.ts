import "./commands";

declare global {
  namespace Cypress {
    interface Chainable {
      prepare(): void;
    }
  }
}
declare global {
  namespace Cypress {
    interface Chainable {
      make(): void;
    }
  }
}
