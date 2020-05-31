/* eslint-disable no-undef */
const countries = require('../countries.json');

describe('ArrayLength', () => {
    let arr;
    beforeEach(() => {
        arr = countries;
    });
    it('should return length of array', () => {
        expect(arr.length).toBeGreaterThan(1);
    })
});

describe('IncludingNameOfTheCountry', () => {
    let arr;
    beforeEach(() => {
        arr = countries[0].name;
    });
    it('should return true if there is a name of country', () => {
        expect(arr.includes('Afghanistan')).toBeTruthy(); 
    })
});

describe('getKeys', () => {
    it('should return an array of object keys', () => {
        Object.values = (obj) => Object.keys(obj);
        let arr = Object.values(countries[0]);
        expect(arr).toEqual(['id', 'name', 'iso3', 'iso2', 'phone_code', 'capital', 'currency'])
    });
});

describe('ArrayLength', () => {
    it('should return length of array', () => {
        expect(countries.length).toEqual(247);
    })
});