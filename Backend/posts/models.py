from typing import List, Optional
from pydantic import BaseModel, Field, validator

class Post(BaseModel):
    id: str = Field(primary_key=True, min_length=1, max_length=50, blank=True)
    title: str = Field(min_length=10, max_length=50, blank=True)
    summary: str=Field(min_length=10,max_length=200,blank=True)
    tags: List[str] = Field(min_length=1, max_length = 10, blank=True)
    content: str 


    @validator('tags')
    def check_tags(cls, tags):
        if not tags:
            raise ValueError('Tags must not be empty')
        if len(tags) > 10:
            raise ValueError('A post can have a maximum of 10 tags')
        return tags

class Config:
        schema_extra = {
            "example": {
                "id": "1",
                "title": "First Post",
                "summary": "Summary of the first post",
                "content": "Content in **Markdown**",
                "tags": ["tag1", "tag2"],
            }
        }
