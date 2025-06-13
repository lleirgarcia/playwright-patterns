Feature: Inventory

  Background:
    Given I am logged in as standard user

  Scenario: User can add an item to the cart
    When I add "Sauce Labs Backpack" to the cart
    Then the cart count should be 1

  Scenario: User can navigate to the cart
    When I navigate to the cart
    Then the URL should contain "cart"

  Scenario: User can remove an item from the cart
    When I add "Sauce Labs Backpack" to the cart
    And I remove the item from the cart
    Then the cart count should be 0
