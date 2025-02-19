const { Given, Then } = require('@cucumber/cucumber');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;

let response;

Given('I make a GET request to {string}', async function (url) {
  response = await axios.get(url);
});

Then('the response status should be {int}', function (statusCode) {
  expect(response.status).to.equal(statusCode);
});

Then('the response should contain {string}', function (expectedValue) {
  expect(response.data.name).to.equal(expectedValue);
});
