const Calculator = require('../../src/calculator.js');

describe("Calculator functions", () => {
    test("add", () => {
        expect(Calculator.add(2, 3)).toBe(5);
    });

    test("sub", () => {
        expect(Calculator.sub(5, 2)).toBe(3);
    });

    test("mul", () => {
        expect(Calculator.mul(4, 3)).toBe(12);
    });

    test("div", () => {
        expect(Calculator.div(10, 2)).toBe(5);
    });

    test("div by zero", () => {
        expect(() => Calculator.div(10, 0)).toThrow("DivisionByZero");
    });

    test("pow", () => {
        expect(Calculator.pow(2, 3)).toBe(8);
    });
});
