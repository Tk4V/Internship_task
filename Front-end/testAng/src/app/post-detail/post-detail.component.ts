import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService, Post } from '../api.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit {
  post?: Post;
  errorMessage: string = '';
  isLoading: boolean = false;

  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const postId = params.get('id');
      if (postId) {
        this.fetchPost(postId);
      }
    });
  }

  fetchPost(id: string): void {
    this.isLoading = true;
    this.apiService.getPost(id).subscribe(
      post => {
        this.post = post;
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching post:', error);
        this.errorMessage = 'Failed to load post. Please try again later.';
        this.isLoading = false;
      }
    );
  }

  generateRandomPhotoUrl(tags: string[]): string {
    const tag = tags[Math.floor(Math.random() * tags.length)]; // Select a random tag from the post's tags
    return `https://source.unsplash.com/random/800x400?${tag}`; // Use Unsplash API to get a random photo based on the tag
  }
}
