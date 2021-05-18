import { When, And } from "cypress-cucumber-preprocessor/steps/index";

When("I try to cy.get in the shadow dom it works", () => {
    cy.get("a[title='Women']", { includeShadowDom: true });
});

And("when I try to cy.contains in the shadow dom it doesn't", () => {
    cy.contains("a[title='Contact Us]", "Contact us", { includeShadowDom: true });
});

