// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { TodoComponent } from './todo/todo.component'; // Assuming TodoComponent is the component where post selection happens

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'post/:id', component: PostDetailComponent },
  // Ensure this route is properly defined
  // Other routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
