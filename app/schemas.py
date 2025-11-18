# app/schemas.py
from pydantic import BaseModel
from typing import Union


Number = Union[int, float]


class OperationRequest(BaseModel):
    a: Number
    b: Number


class OperationResponse(BaseModel):
    result: float