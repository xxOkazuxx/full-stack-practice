from fastapi import APIRouter
from app.db.repository import Repository
from app.db.model import User

router = APIRouter()

@router.get("/all")
async def get_all_company() -> list[User]:
    allcompanydata = Repository.selectAll()

    return allcompanydata

@router.get("/{id}")
async def get_company_by_id(id: int) -> User:
    companydata = Repository.selectById(id)

    return companydata
