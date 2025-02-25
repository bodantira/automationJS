Feature: Create Recipe

  Scenario: Successfully create a new recipe
    Given I have a new recipe payload
    When I send a POST request to create a recipe
    Then the response create status should be 200
    And the response should contain the new recipe details
