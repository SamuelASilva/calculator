# app/calculator.py
from typing import Union


Number = Union[int, float]


def add(a: Number, b: Number) -> Number:
    return a + b


def sub(a: Number, b: Number) -> Number:
    return a - b


def mul(a: Number, b: Number) -> Number:
    return a * b


def div(a: Number, b: Number) -> Number:
    if b == 0:
        raise ZeroDivisionError("Division by zero is not allowed")
    return a / b


def pow_(a: Number, b: Number) -> Number:
    # potência: permite expoentes negativos e fracionários conforme Python
    return a ** b