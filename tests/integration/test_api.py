# tests/integration/test_api.py
import pytest
from fastapi.testclient import TestClient
from app.main import app


client = TestClient(app)


def test_health():
    resp = client.get("/health")
    assert resp.status_code == 200
    assert resp.json() == {"status": "ok"}


@pytest.mark.parametrize("path,a,b,expected", [
    ("/add", 1, 2, 3),
    ("/sub", 5, 2, 3),
    ("/mul", 3, 4, 12),
    ("/pow", 2, 5, 32),
])
def test_basic_ops(path, a, b, expected):
    resp = client.post(path, json={"a": a, "b": b})
    assert resp.status_code == 200
    assert resp.json()["result"] == expected


def test_division():
    resp = client.post("/div", json={"a": 9, "b": 3})
    assert resp.status_code == 200
    assert resp.json()["result"] == 3


def test_divide_by_zero_api():
    resp = client.post("/div", json={"a": 1, "b": 0})
    assert resp.status_code == 400
    assert "Division by zero" in resp.json()["detail"]


# invalid payload
def test_invalid_payload():
    resp = client.post("/add", json={"x": 1})
    assert resp.status_code == 422