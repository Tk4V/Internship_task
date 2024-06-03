import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { MarkdownModule } from 'ngx-markdown';

export function markedOptionsFactory() {
  const renderer = {
    image: (href: string, title: string, text: string): string => {
      return `<img src="${href}" alt="${text}" title="${title}" />`;
    }
  };

  return {
    loader: HttpClient,
    markedOptions: {
      provide: MarkdownModule,
      useValue: { renderer: renderer }
    }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot(markedOptionsFactory())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
