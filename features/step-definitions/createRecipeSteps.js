const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');
const expect = chai.expect;
const api = require('../../support/apiClient');

let response;
let newRecipePayload;

Given('I have a new recipe payload', function () {
    newRecipePayload = {
        name: "Chocolate Cake",
        ingredients: ["Flour", "Sugar", "Cocoa Powder"],
        instructions: "Mix all ingredients and bake at 180°C for 30 minutes."
    };
});

When('I send a POST request to create a recipe', async function () {
    response = await api.post('/recipes/add').send(newRecipePayload);
});

Then('the response create status should be 200', function () {
    expect(response.status).to.equal(200);
});

Then('the response should contain the new recipe details', function () {
    expect(response.body).to.have.property('name', newRecipePayload.name);
});
