```gherkin
Feature: Signup
  Scenario: Client creates an account
    Given I signup with <name>, <email> and <password>
    When I submit the credentials
    Then I should see a "welcome" message
  
  Scenario Outline: Signup fails
    Given I signup with <name>, <email> and <password>
    And <email> is already registered
    When I submit the credentials
    Then I should see an "already registered email" error

    Given I signup with <email> and <password>
    And leave <name> blank
    When I submit the credentials
    Then I should see a "name is mandatory" error

    Given I signup with <name> and <password>
    And leave <email> blank
    When I submit the credentials
    Then I should see a "email is mandatory" error

    Given I signup with <name> and <email>
    And leave <password> blank
    When I submit the credentials
    Then I should see a "password is mandatory" error

    Given I signup with <name>, <email> and <password>
    And <password> is less than "6" digits
    When I submit the credentials
    Then I should see a "password is too short" error

    Given I signup with <name>, <email> and <password>
    And <email> format is invalid
    When I submit the credentials
    Then I should see an "invalid email" error
```
