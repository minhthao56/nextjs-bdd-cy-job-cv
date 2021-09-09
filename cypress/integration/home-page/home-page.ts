import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("User Open Home Page", () => {
  cy.visit("/");
});

Then("User See {string}", (text) => {
  cy.contains("h1", text);
});
