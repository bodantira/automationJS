@smoke
Feature: API Testing with Cucumber
  @post_data
  Scenario: Get user details
    Given I make a GET request to "https://jsonplaceholder.typicode.com/users/1"
    Then the response status should be 200
    And the response should contain "Leanne Graham"
