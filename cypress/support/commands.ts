/// <reference types="cypress" />

declare global {
  namespace Cypress {
    interface Chainable {
      getByDataCy(value: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}

Cypress.Commands.add("getByDataCy", (value) => cy.get(`[data-cy=${value}]`));

export {};
