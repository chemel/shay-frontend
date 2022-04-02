import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListFeedsComponent } from './components/list-feeds/list-feeds.component';
import { FeedService } from './services/feed.service';
import { ListEntriesComponent } from './components/list-entries/list-entries.component';
import { EntryService } from './services/entry.service';
import { NewsreaderService } from './services/newsreader.service';
import { ShowEntryComponent } from './components/show-entry/show-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    ListFeedsComponent,
    ListEntriesComponent,
    ShowEntryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    NewsreaderService,
    FeedService,
    EntryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
