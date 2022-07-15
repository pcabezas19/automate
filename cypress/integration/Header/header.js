/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given("un usuario se encuantra en landing page", () => {
  cy.visit("/");
});

When('cliquea en "Sobre Nosotros"', () => {
  cy.get('.justify-end > [href="/about-us?lang=es"]').click();
});

When('cliquea en "Tecnologías"', () => {
  cy.get('.justify-end > [href="/stack?lang=es"]').click();
});

When('cliquea en "Que hacemos"', () => {
  cy.get('.justify-end > [href="/process?lang=es"]').click();
});

When('cliquea en "Convertite en Steplixer"', () => {
  cy.get('.justify-end > [href="/jobs?lang=es"]').click();
});

When("cliquea en Contactanos", () => {
  cy.get('.justify-end > [href="/contact?lang=es"] > .bg-white').click();
});

When("cliquea en el icono de idioma", () => {
  cy.get('[class="w-[34px] h-[34px]"]').eq(3).click();
});

Then("la página ingresa a la sección de Sobre nosotros", () => {
  cy.title().should(
    "eq",
    "Sobre nosotros | Sherpas Digitales | Steplix Software 🧗"
  );
});

Then("la página ingresa a la sección de Tecnologías", () => {
  cy.title().should(
    "eq",
    "Tecnologías | Sherpas Digitales | Steplix Software 🧗"
  );
});

Then("la página ingresa a la sección Que hacemos", () => {
  cy.title().should(
    "eq",
    "Qué hacemos | Sherpas Digitales | Steplix Software 🧗"
  );
});

Then("ingresa a la página Convertite en Steplixer", () => {
  cy.title().should(
    "eq",
    "Convertite en Steplixer | Sherpas Digitales | Steplix Software 🧗"
  );
});

Then("ingresa a la página Contactanos", () => {
  cy.title().should(
    "eq",
    "Contactanos | Sherpas Digitales | Steplix Software 🧗"
  );
});

Then("cambia el idioma de la pagina", () => {
  cy.get(
    '[class="text-6xl md:text-9xl lg:text-12xl xl:text-11xl font-black"]'
  ).should("contain", "We are ");
});
