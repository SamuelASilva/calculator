const Calculator = require('../../src/calculator.js');

// ---------- FUNÇÕES BÁSICAS ----------
test('add deve somar corretamente', () => {
  expect(Calculator.add(2, 3)).toBe(5);
});

test('sub deve subtrair corretamente', () => {
  expect(Calculator.sub(10, 4)).toBe(6);
});

test('mul deve multiplicar corretamente', () => {
  expect(Calculator.mul(3, 5)).toBe(15);
});

test('div deve dividir corretamente', () => {
  expect(Calculator.div(20, 4)).toBe(5);
});

test('div deve lançar erro em divisão por zero', () => {
  expect(() => Calculator.div(10, 0)).toThrow('DivisionByZero');
});

test('pow deve calcular potência', () => {
  expect(Calculator.pow(2, 4)).toBe(16);
});

// ---------- FUNÇÃO evaluate ----------
test('evaluate soma', () => {
  expect(Calculator.evaluate('+', 1, 2)).toBe(3);
});

test('evaluate subtrai', () => {
  expect(Calculator.evaluate('-', 10, 3)).toBe(7);
});

test('evaluate multiplica', () => {
  expect(Calculator.evaluate('*', 3, 3)).toBe(9);
});

test('evaluate divide', () => {
  expect(Calculator.evaluate('/', 9, 3)).toBe(3);
});

test('evaluate potência', () => {
  expect(Calculator.evaluate('^', 3, 3)).toBe(27);
});

test('evaluate lança erro em operador inválido', () => {
  expect(() => Calculator.evaluate('%', 2, 2)).toThrow('UnknownOp:%');
});
