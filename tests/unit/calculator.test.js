const Calculator = require('../../src/calculator');


describe('Calculator - unit', () => {
    test('soma', () => expect(Calculator.add(2, 3)).toBe(5));
    test('subtração', () => expect(Calculator.sub(5, 2)).toBe(3));
    test('multiplicação', () => expect(Calculator.mul(3, 4)).toBe(12));
    test('divisão', () => expect(Calculator.div(10, 2)).toBe(5));
    test('divisão por zero lança', () => expect(() => Calculator.div(1, 0)).toThrow('DivisionByZero'));
    test('potência', () => expect(Calculator.pow(2, 3)).toBe(8));
    test('evaluate +', () => expect(Calculator.evaluate(1, '+', 2)).toBe(3));
});