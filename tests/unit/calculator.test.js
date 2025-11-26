const Calculator = require('../../src/calculator.js');

describe("Calculator Tests", () => {

    // ----- Operações básicas -----

    test("soma dois números", () => {
        expect(Calculator.add(2, 3)).toBe(5);
    });

    test("subtrai dois números", () => {
        expect(Calculator.sub(5, 2)).toBe(3);
    });

    test("multiplica dois números", () => {
        expect(Calculator.mul(3, 4)).toBe(12);
    });

    test("divide dois números", () => {
        expect(Calculator.div(10, 2)).toBe(5);
    });

    test("lança erro ao dividir por zero", () => {
        expect(() => Calculator.div(10, 0)).toThrow("DivisionByZero");
    });

    test("potência de dois números", () => {
        expect(Calculator.pow(2, 3)).toBe(8);
    });

    // ----- Testes da função evaluate(op, a, b) -----

    test("evaluate soma", () => {
        expect(Calculator.evaluate('+', 2, 3)).toBe(5);
    });

    test("evaluate subtração", () => {
        expect(Calculator.evaluate('-', 5, 2)).toBe(3);
    });

    test("evaluate multiplicação", () => {
        expect(Calculator.evaluate('*', 3, 4)).toBe(12);
    });

    test("evaluate divisão", () => {
        expect(Calculator.evaluate('/', 10, 2)).toBe(5);
    });

    test("evaluate potência", () => {
        expect(Calculator.evaluate('^', 2, 3)).toBe(8);
    });

    test("evaluate operador inválido", () => {
        expect(() => Calculator.evaluate('%', 5, 5)).toThrow("UnknownOp:%");
    });

});
