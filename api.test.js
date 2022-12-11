const request = require('supertest')('localhost:3000')
const assert = require('assert');
const { response } = require('express');

describe("testing API endpoints '/' ", () => {
    it(' GET / should return a value depending on the car model/year', async () => {
        const carModel = "Civic";
        const CarYear = 2014;
        const input = { carModel, CarYear};

        return request
            .get('/Cars/Calculate')
            .send(input)
            .then((response) => {
                assert.strict(response.status, 200);
                assert.strict(response.body, 
                    6614
                );
            });
    });
});