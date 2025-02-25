const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const expect = chai.expect;
const api = require('../../support/apiClient');

let response;
let updatedRecipePayload;

Given('I have an updated recipe payload', function () {
    updatedRecipePayload = {
        name: "Vanilla Cake",
        ingredients: ["Flour", "Sugar", "Vanilla Extract"],
        instructions: "Mix all ingredients and bake at 180°C for 35 minutes."
    };
});

When('I send a PUT request to update a recipe with ID {int}', async function (recipeId) {
    response = await api.put(`/recipes/${recipeId}`).send(updatedRecipePayload);
});

Then('the response update status should be 200', function () {
    expect(response.status).to.equal(200);
});

Then('the response should contain the updated recipe details', function () {
    expect(response.body).to.have.property('name', updatedRecipePayload.name);
});
