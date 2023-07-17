```gherkin
Feature: Recover password
  Scenario: Client resets the password
    Given I forgot my password
    And the acccount exists
    When I submit my <email>
    Then I should see a "success reset" notice
  
    Given I forgot my password
    And the acccount exists
    When I submit my <email>
    Then I should receive a password reset email

    Given I received a password reset email
    When I visit the link
    Then I should be able to type a new password
    And login with the new password
```
