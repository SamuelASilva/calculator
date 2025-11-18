# tests/e2e/test_e2e_selenium.py
import os
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager


FRONT_URL = os.getenv("FRONT_URL", "http://localhost:8000/index.html")


@pytest.mark.skipif(not os.getenv("RUN_E2E"), reason="Set RUN_E2E=1 to run E2E")
def test_e2e_addition_selenium():
    service = Service(ChromeDriverManager().install())
    options = webdriver.ChromeOptions()
    options.add_argument("--headless")
    driver = webdriver.Chrome(service=service, options=options)


    try:
        driver.get(FRONT_URL)


        # Preenche campos
        driver.find_element(By.ID, "input-a").send_keys("7")
        driver.find_element(By.ID, "input-b").send_keys("8")
        driver.find_element(By.ID, "btn-add").click()


        result_el = driver.find_element(By.ID, "result")
        assert "15" in result_el.text


    finally:
        driver.quit()
# ```python
# tests/e2e/test_e2e_playwright.py
# Este é um exemplo simples que abre uma página local (o front-end em HTML/JS que você criará)
# e interage com ela como um usuário faria. Ajuste os seletores conforme seu front-end.


import os
import time
import pytest
from playwright.sync_api import sync_playwright


FRONT_URL = os.getenv("FRONT_URL", "http://localhost:8000/index.html")


@pytest.mark.skipif(not os.getenv("RUN_E2E"), reason="Set RUN_E2E=1 to run E2E")
def test_e2e_addition():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = browser.new_page()
        page.goto(FRONT_URL)
        # exemplo de selectors — ajuste conforme seu HTML
        page.fill('#input-a', '7')
        page.fill('#input-b', '8')
        page.click('#btn-add')
        # aguarda resultado exibido no elemento #result
        page.wait_for_selector('#result')
        text = page.inner_text('#result')
        assert '15' in text
        browser.close()