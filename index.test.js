const sumChars = require("./index.js");


//Test for 2014 Civic = 6614
describe('sumChars', () => {
    it("car value should be expected value", () => {
        const carModel = "Civic";
        const carYear = 2014;
        const result = sumChars(carModel, carYear);
        expect(result).toBe(6614);
    });  
});


//Test for 2002 Spyder = 10702
describe('sumChars', () => {
    it("car value should be expected value", () => {
        const carModel = "Spyder";
        const carYear = 2002;
        const result = sumChars(carModel, carYear);
        expect(result).toBe(10702);
    });  
});


//Test for 2020 911 = 420
describe('sumChars', () => {
    it("car value should be expected value", () => {
        const carModel = "911";
        const carYear = 2020;
        const result = sumChars(carModel, carYear);
        expect(result).toBe(420);
    });  
});


//Test for -987 Task-Force = ERROR, undefined
describe('sumChars', () => {
    it("car value should be expected value", () => {
        const carModel = "Task-Force";
        const carYear = -987;
        const result = sumChars(carModel, carYear);
        expect(result).toBe(undefined);
    });  
});


//Test for twenty twenty C200 = ERROR, undefined
describe('sumChars', () => {
    it("car value should be expected value", () => {
        const carModel = "C200";
        const carYear = "twenty twenty";
        const result = sumChars(carModel, carYear);
        expect(result).toBe(undefined);
    });  
});