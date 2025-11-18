# Calculadora - Backend (FastAPI)


## Instalação (recomendo criar um venv)


python -m venv .venv
source .venv/bin/activate # mac/linux
.\.venv\Scripts\activate # windows
pip install -r requirements.txt


# rodar a API
uvicorn app.main:app --reload --port 8000


# rodar testes unitários e integração
pytest tests/unit tests/integration -q


# rodar todos os testes incluindo E2E (requer Playwright e front-end rodando)
# export RUN_E2E=1 ; export FRONT_URL="http://localhost:5500/index.html"
# playwright install
pytest -q