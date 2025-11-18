# app/main.py
from fastapi import FastAPI, HTTPException
from app import calculator
from app.schemas import OperationRequest, OperationResponse


app = FastAPI(title="Calculadora API")


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/add", response_model=OperationResponse)
async def endpoint_add(req: OperationRequest):
    res = calculator.add(req.a, req.b)
    return OperationResponse(result=res)


@app.post("/sub", response_model=OperationResponse)
async def endpoint_sub(req: OperationRequest):
    res = calculator.sub(req.a, req.b)
    return OperationResponse(result=res)


@app.post("/mul", response_model=OperationResponse)
async def endpoint_mul(req: OperationRequest):
    res = calculator.mul(req.a, req.b)
    return OperationResponse(result=res)


@app.post("/div", response_model=OperationResponse)
async def endpoint_div(req: OperationRequest):
    try:
        res = calculator.div(req.a, req.b)
    except ZeroDivisionError as e:
        raise HTTPException(status_code=400, detail=str(e))
    return OperationResponse(result=res)


@app.post("/pow", response_model=OperationResponse)
async def endpoint_pow(req: OperationRequest):
    try:
        res = calculator.pow_(req.a, req.b)
    except Exception as e:
        # exemplos: OverflowError, ValueError em casos raros
        raise HTTPException(status_code=400, detail=str(e))
    return OperationResponse(result=res)