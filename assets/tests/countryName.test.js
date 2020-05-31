/* eslint-disable no-undef */
const countryName = require('../countryName.json');

describe('Identifier', () => {
    let obj;
    beforeEach(() => {
        obj = countryName;
    });
    it('should return existence of Object', () => {
        expect(obj).toBeDefined();
    })
});

describe('getObject', () => {
    let obj;
    beforeEach(() => {
        obj = countryName;
    });
    it('should return a type of Object', () => {
        expect(obj).toBeInstanceOf(Object);
    })
})

describe('equalization', () => {
    let obj;
    beforeEach(() => {
        obj = countryName;
    });
    it('should return a list of abbreviation', () => {
        expect(obj).toEqual(expect.any(Object));
    })
})

describe('getStatesTypeAhead', () => {
    it('should return an array of states that starts with symbol', () => {
        let a = Object.keys(countryName);
        function getStatesTypeAhead(input) {
            return a
            .filter((a) => a.indexOf(input) === 0)
            .slice(0, 3);
        }
        let arr = getStatesTypeAhead('A');
        expect(arr).toEqual(['AE', 'AD', 'AG'])
    });
});

describe('getStatesWithGivenLength', () => {
    it('should return an array of states that starts with length = 4', () => {
        Object.values = (obj) => Object.keys(obj).map(k => obj[k]);
        let a = Object.values(countryName);
        function getStatesWithGivenLength(input) {
            return a
            .filter((a) => a.length === input)
            .slice(0, 3);
        }
        let arr = getStatesWithGivenLength(4);
        expect(arr).toEqual(['Guam', 'Oman', 'Iraq'])
    });
});

describe('getStatesWithSubStr', () => {
    it('should return an array of states that include substring', () => {
        Object.values = (obj) => Object.keys(obj).map(k => obj[k]);
        let a = Object.values(countryName);
        function getStatesWithSubStr(input) {
            return a
            .filter((a) => a.includes(input))
        }
        let arr = getStatesWithSubStr('nis');
        expect(arr).toEqual(['Turkmenistan', 'Tunisia', 'Afghanistan'])
    });
});



