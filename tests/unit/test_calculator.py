# tests/unit/test_calculator.py
import math
import pytest
from app import calculator


def test_add():
    assert calculator.add(2, 3) == 5
    assert calculator.add(-1, 1) == 0


def test_sub():
    assert calculator.sub(5, 3) == 2
    assert calculator.sub(0, 5) == -5


def test_mul():
    assert calculator.mul(4, 3) == 12
    assert calculator.mul(0, 999) == 0


def test_div():
    assert calculator.div(10, 2) == 5
    assert pytest.approx(calculator.div(1, 3), rel=1e-9) == 1/3


def test_div_by_zero():
    with pytest.raises(ZeroDivisionError):
        calculator.div(1, 0)


def test_pow():
    assert calculator.pow_(2, 3) == 8
    assert calculator.pow_(9, 0.5) == 3
    assert calculator.pow_(2, -1) == 0.5


# edge: large exponent (may raise OverflowError on some systems)
def test_pow_large():
    val = calculator.pow_(2, 10)
    assert val == 1024