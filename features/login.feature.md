```gherkin
Feature: Login
  Scenario: Client logs to the website
    Given I login with <email> and <password>
    And the acccount exists
    When I submit the credentials
    Then I should be succesfully authenticated
  
  Scenario Outline: Login fails
    Given I login with <email> and <password>
    And the acccount exists but <password> is wrong
    When I submit the credentials
    Then I should see an "invalid credentials" error

    Given I login with <email> and <password>
    And the acccount does not exist
    When I submit the credentials
    Then I should see an "invalid credentials" error

    Given I login with <password> and leave <email> blank
    When I submit the credentials
    Then I should see a "email is mandatory" error

    Given I login with <email> and leave <password> blank
    When I submit the credentials
    Then I should see a "password is mandatory" error

    Given I login with <email> and <password>
    And <password> is less than "6" digits
    When I submit the credentials
    Then I should see a "password is too short" error

    Given I login with <email> and <password>
    And <email> format is invalid
    When I submit the credentials
    Then I should see an "invalid email" error
```
