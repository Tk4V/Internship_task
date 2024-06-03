import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:8000'; // Update this to your FastAPI base URL

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

  getPost(postId: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/posts/${postId}`);
  }

  getPostsByTag(tag: string): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts/tags/${tag}`);
  }
}
