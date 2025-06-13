Feature: Login

  Scenario: User login successful
    Given I am on the login page
    When I login as standard user
    Then I should see the inventory page

  Scenario: User login with incorrect credentials shows error
    Given I am on the login page
    When I login with invalid credentials
    Then I should see login error
