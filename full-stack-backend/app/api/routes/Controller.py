from fastapi import APIRouter
from app.db.Repository import Repository
from app.db.model import User

router = APIRouter()

@router.get("/all")
async def get_all_company() -> list[User]:
    allcompanydata = Repository.selectAll()

    return allcompanydata
