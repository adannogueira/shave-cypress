```gherkin
Feature: Order
  Scenario: Client places an order
    Given I'm logged into the website
    And I select a shaver
    When I select a "haircut"
    Then I should see service confirmation page
```
