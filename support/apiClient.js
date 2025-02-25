const request = require('supertest');
require('dotenv').config();

const api = request(process.env.BASE_URL);

module.exports = api;
