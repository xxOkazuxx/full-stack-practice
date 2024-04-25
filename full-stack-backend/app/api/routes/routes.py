from fastapi import APIRouter
from app.api.routes import controller

router = APIRouter()

router.include_router(controller.router,prefix="/companys",tags=["macompany"])
