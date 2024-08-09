const { add, multiply } = require('./calculator.js');

describe('fun with matchers', () => {
    it('shouold know equality', () => {
        expect({ a: 1 }).toStrictEqual({ a: 1 });
        expect({ a: 1 }).toEqual({ a: 1 });
        expect([1, 2]).toEqual([1, 2]);
    });
});

describe('should work with truthy and falsy checks', () => {
    expect(1).toBeTruthy();

    expect(0).toBeFalsy();
    expect("").toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(false).toBeFalsy();
    expect(NaN).toBeFalsy();
});

describe('add()', () => {
    it('should add 2 numbers', () => {
        // setup - ARRANGE
        const expected = 4;

        // execute code under test - ACT 
        const actual = add(2, 2);

        // assert result - ASSERT
        expect(actual).toBe(expected);
        expect(add(0, 0)).toBe(0);
        expect(add(1, 1)).toBe(2);
        expect(add(-1, 1)).toBe(0);
        expect(add(-1, 0)).toBe(-1);
        expect(add(3, 1000)).toBe(1003);
    })
});

//    GETTING RID OF THIS TEST BECAUSE 0 IS SEEN AS FALSEY
// it("should throw an error if called with one value", () => {
//     expect(() => {
//         add(1);
//     }).toThrow();
// });

it('returns 0 when there is no value', () => {
    expect(add()).toBe(0);
});

it('add a collection of values', () => {
    const expected = 500;
    const actual = add(400, 50, 25, 25);
    expect(actual).toBe(expected);
    expect(add(1, 2, 5, -3)).toBe(5)
});

it.todo('values should be numbers');
it.todo('should add an array of values');
it.todo('should throw an error if sum is greater than max number')

describe('multiply()', () => {
    it('should multiply 2 numbers', () => {
        // setup - ARRANGE
        const expected = 4;

        // execute code under test - ACT 
        const actual = multiply(2, 2);

        // assert result - ASSERT
        expect(actual).toBe(expected)
        expect(multiply(3, 5)).toBe(15);
        expect(multiply(2, 5)).toBe(10);
        expect(multiply(8, 10)).toBe(80);
    });
});


