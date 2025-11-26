const Calculator = require('../../src/calculator.js');
// ---------- FUNÇÕES BÁSICAS ----------
test('add deve somar corretamente', () => {
  expect(Calculator.add(2, 3)).toBe(5);
});

test('sub deve subtrair corretamente', () => {
  expect(Calculator.sub(5, 3)).toBe(2);
});

test('mul deve multiplicar corretamente', () => {
  expect(Calculator.mul(4, 3)).toBe(12);
});

test('div deve dividir corretamente', () => {
  expect(Calculator.div(10, 2)).toBe(5);
});

test('div deve lançar erro ao dividir por zero', () => {
  expect(() => Calculator.div(10, 0)).toThrow('DivisionByZero');
});

test('pow deve calcular potência', () => {
  expect(Calculator.pow(2, 3)).toBe(8);
});

// ---------- FUNÇÃO EVALUATE ----------
test('evaluate soma', () => {
  expect(Calculator.evaluate('+', 2, 3)).toBe(5);
});

test('evaluate subtrai', () => {
  expect(Calculator.evaluate('-', 5, 2)).toBe(3);
});

test('evaluate multiplica', () => {
  expect(Calculator.evaluate('*', 3, 3)).toBe(9);
});

test('evaluate divide', () => {
  expect(Calculator.evaluate('/', 10, 2)).toBe(5);
});

test('evaluate potencia', () => {
  expect(Calculator.evaluate('^', 2, 4)).toBe(16);
});

test('evaluate deve lançar erro para operador inválido', () => {
  expect(() => Calculator.evaluate('?', 1, 1)).toThrow('UnknownOp');
});
