import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFeedsComponent } from './components/list-feeds/list-feeds.component';
import { FeedService } from './services/feed.service';

@NgModule({
  declarations: [
    AppComponent,
    ListFeedsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    FeedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
