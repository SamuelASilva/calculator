const fs = require('fs');
const path = require('path');
const { getByText, getByDisplayValue, fireEvent } = require('@testing-library/dom');


// carrega o HTML da página e os scripts (simula navegador via jsdom)
const html = fs.readFileSync(path.resolve(__dirname, '../../index.html'), 'utf8');


describe('Integration UI -> logic', () => {
    let container;


    beforeEach(() => {
        document.documentElement.innerHTML = html;
        // carregar scripts (simples require dos arquivos que usam window)
        require('../../src/calculator');
        require('../../src/ui');
        container = document.body;
    });


    test('faz 2 + 3 = 5 via UI', () => {
        fireEvent.click(getByText(container, '2'));
        fireEvent.click(getByText(container, '+'));
        fireEvent.click(getByText(container, '3'));
        fireEvent.click(getByText(container, '='));


        const display = document.getElementById('display');
        expect(display.value).toBe('5');
    });


    test('limpa com C', () => {
        fireEvent.click(getByText(container, '9'));
        fireEvent.click(getByText(container, 'C'));
        const display = document.getElementById('display');
        expect(display.value).toBe('0');
    });
});