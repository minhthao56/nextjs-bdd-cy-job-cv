import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given("User Home Page Title", () => {
  cy.visit("/");
});

Then("User See  Title {string}", (text) => {
  cy.title().should("eq", text);
});
