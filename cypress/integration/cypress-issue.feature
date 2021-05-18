Feature: Cypress doesn't allow includeShadowDom on cy.contains

Scenario: Trying to include shadow dom in cy.contains
    Given I am on the landing page
    When I try to cy.get in the shadow dom it works
    And when I try to cy.contains in the shadow dom it doesn't