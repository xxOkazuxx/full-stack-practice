from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api.routes.routes import router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    # cookieの共有を行う設定（defaultはFalse）
    allow_credentials=True,
    # 許可するHTTPメソッドを指定する。（defaultはGET）
    allow_methods=["*"],
    # オリジン間リクエストでサポートするHTTPリクエストヘッダーのリストを指定する。
    # Accept、Accept-Language、Content-Language、Content-Typeヘッダーが常に許可される。
    allow_headers=["*"],
)
app.include_router(router,prefix="/api")

