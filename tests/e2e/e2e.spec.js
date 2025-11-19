const { test, expect } = require('@playwright/test');


test.describe('Calculadora E2E', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:3000');
    });


    test('2 + 3 = 5', async ({ page }) => {
        await page.click('button:has-text("2")');
        await page.click('button:has-text("+")');
        await page.click('button:has-text("3")');
        await page.click('button:has-text("=")');


        const val = await page.inputValue('#display');
        expect(val).toBe('5');
    });
});