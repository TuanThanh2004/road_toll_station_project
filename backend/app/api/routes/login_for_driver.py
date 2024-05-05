from fastapi import FastAPI, Form, APIRouter, HTTPException, Depends
from typing_extensions import Annotated

from models import Driver, LicensePlate, TransactionHistory, RoadTollPlaza
from pydantic import BaseModel


router = FastAPI()

class LoginForDriverRequest(BaseModel):
    cid : str
    password : str
    

@router.post("/login/")
async def login(cid: Annotated[str, Form()], password: Annotated[str, Form()]):

    return {"Đăng nhâp thành công"}