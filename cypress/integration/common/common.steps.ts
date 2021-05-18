import { Given, Before } from "cypress-cucumber-preprocessor/steps";

Before({ tags: "@foo" }, () => cy.log("This is another before"));

Given("I am on the landing page", () => {
    cy.visit("");
});
