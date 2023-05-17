import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadlineComponent } from './components/headline/headline.component';
import { IndexComponent } from './pages/index/index.component';
import { ArticlePreviewComponent } from './components/article-preview/article-preview.component';
import { ArticleLatestComponent } from './components/article-latest/article-latest.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadlineComponent,
    ArticlePreviewComponent,
    ArticleLatestComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
