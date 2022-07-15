/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("hace scrolldown hasta el footer", () => {
  cy.visit("/");
});

When("hace click en el logo de Facebook", () => {
    cy.get('[href="https://www.facebook.com/steplix"] > .inline-block > .flex > .w-5'
  ).click();
});

When("hace click en el logo de Instagram", () => {
  cy.get(
    '[href="https://www.instagram.com/steplixsoftware"] > .inline-block > .flex > .w-5'
  ).click();
});

When("hace click en el logo de LinkedIn", () => {
  cy.get(
    '[href="https://www.linkedin.com/company/steplix"] > .inline-block > .flex > .w-5'
  ).click();
});

When("hace click en el logo de Iram", () => {
  cy.get(
    '[href="https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iram.pdf"] > .w-10'
  ).click();
});

When("hace click en el logo de IQNet", () => {
  cy.get(".h-12").click();
});

Then("abre otra pestaña con el Facebook de Steplix", () => {
  cy.get('[target="_blank"]').should(
    "have.attr",
    "href",
    "https://www.facebook.com/steplix"
  );
});

Then("abre otra pestaña con el Instagram de Steplix", () => {
  cy.get('[target="_blank"]')
    .eq(1)
    .should("have.attr", "href", "https://www.instagram.com/steplixsoftware");
});

Then("abre otra pestaña con el LinkedIn de Steplix", () => {
  cy.get('[target="_blank"]')
    .eq(2)
    .should("have.attr", "href", "https://www.linkedin.com/company/steplix");
});

Then("abre otra pestaña con el Iram de Steplix", () => {
  cy.get('[target="_blank"]')
    .eq(3)
    .should(
      "have.attr",
      "href",
      "https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iram.pdf"
    );
});

Then("abre otra pestaña con el IQNet de Steplix", () => {
  cy.get('[target="_blank"]')
    .eq(4)
    .should(
      "have.attr",
      "href",
      "https://s3.sa-east-1.amazonaws.com/static01.steplix.com/docs/A+G+CAPITAL+S.A.+-+STEPLIX+iqnet.pdf"
    );
});
