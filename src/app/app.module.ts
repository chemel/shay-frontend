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
import { LayoutNewsreaderComponent } from './components/layout-newsreader/layout-newsreader.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NewFeedComponent } from './components/new-feed/new-feed.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { CategoryService } from './services/category.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormLoginComponent } from './components/form-login/form-login.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ListFeedsComponent,
    ListEntriesComponent,
    ShowEntryComponent,
    LayoutNewsreaderComponent,
    ToolbarComponent,
    NewFeedComponent,
    FormLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    DropdownModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    NewsreaderService,
    FeedService,
    EntryService,
    CategoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
