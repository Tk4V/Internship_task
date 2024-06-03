import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService, Post } from '../api.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  posts: Post[] = [];
  filteredPosts: Post[] = [];
  selectedPost?: Post;
  selectedTag?: string;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.isLoading = true;
    this.apiService.getPosts().subscribe(
      posts => {
        this.posts = posts;
        this.filteredPosts = posts;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching posts:', error);
        this.errorMessage = 'Failed to load posts. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  selectPost(post: Post): void {
    this.router.navigate(['/post', post.id]);
  }

  filterPosts(tag?: string): void {
    if (tag) {
      this.selectedTag = tag;
      this.filteredPosts = this.posts.filter(post => post.tags.includes(tag));
    } else {
      this.clearFilter();
    }
  }

  clearFilter(): void {
    this.selectedTag = undefined;
    this.filteredPosts = this.posts;
  }

  getUniqueTags(): string[] {
    const tags = new Set<string>();
    this.posts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags);
  }

  searchPosts(event: Event): void {
    const input = event.target as HTMLInputElement;
    const term = input.value.trim();
    if (term) {
      const lowerTerm = term.toLowerCase();
      this.filteredPosts = this.posts.filter(post =>
        post.title.toLowerCase().includes(lowerTerm) ||
        post.summary.toLowerCase().includes(lowerTerm)
      );
    } else {
      this.filteredPosts = this.posts;
    }
  }

  generateRandomPhotoUrl(tags: string[]): string {
    const randomTag = tags[Math.floor(Math.random() * tags.length)];
    return `https://source.unsplash.com/random/800x400/?${randomTag}`;
  }
}
