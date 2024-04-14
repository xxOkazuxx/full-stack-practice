from fastapi import APIRouter
from app.api.routes import Controller

router = APIRouter()

router.include_router(Controller.router,prefix="/companys",tags=["macompany"])
