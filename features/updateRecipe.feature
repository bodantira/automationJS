Feature: Update Recipe

  Scenario: Successfully update an existing recipe
    Given I have an updated recipe payload
    When I send a PUT request to update a recipe with ID 1
    Then the response update status should be 200
    And the response should contain the updated recipe details
