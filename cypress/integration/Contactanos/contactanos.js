/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    cy.visit('/');


Given('Un usuario haya cliqueado en Contactanos', () => {
    cy.get('.justify-end > [href="/contact?lang=es"] > .bg-white').click()
}); 

When('selecciona el icono de "calendario"', () => {
    cy.get('[class="w-5 h-5 md:w-6 md:h-6 lg:w-9 lg:h-9 xl:w-6 xl:h-6"]').eq(0).click()

});

Then('aparece un calendar para agendar una meeting con el team comercial', () => {
    cy.get('[target="_blank"]').eq(0).should('have.attr', 'href', 'https://meetings.hubspot.com/kevin-halbinger')
});

});