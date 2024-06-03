from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from posts.routes import router as posts_router

app = FastAPI()

# Set up CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins. You can specify specific origins if needed.
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods (GET, POST, PUT, DELETE, etc.)
    allow_headers=["*"],  # Allows all headers
)

# Include the posts router
app.include_router(posts_router)


