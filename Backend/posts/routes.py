from fastapi import APIRouter, HTTPException
from typing import List, Optional
from .models import Post
from dummy_date import posts

router = APIRouter()

@router.get("/posts", response_model=List[Post])
def get_posts(tag: Optional[str] = None):
    if tag:
        filtered_posts = [post for post in posts if tag in post["tags"]]
        return filtered_posts
    return posts

@router.get("/posts/{post_id}", response_model=Post)
def get_post(post_id: str):
    post = next((post for post in posts if post["id"] == post_id), None)
    if post is None:
        raise HTTPException(status_code=404, detail="Post not found")
    return post

@router.get("/posts/tags/{tag}", response_model=List[Post])
def get_posts_by_tag(tag: str):
    filtered_posts = [post for post in posts if tag in post["tags"]]
    if not filtered_posts:
        raise HTTPException(status_code=404, detail="No posts found with this tag")
    return filtered_posts
