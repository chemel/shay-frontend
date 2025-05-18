import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { Entry } from '@app/models/entry.model';
import { EntryService } from '@services/entry.service';
import { NewsreaderService } from '@services/newsreader.service';

@Component({
  selector: 'app-list-entries',
  imports: [CommonModule],
  templateUrl: './list-entries.component.html',
  styleUrls: ['./list-entries.component.css']
})
export class ListEntriesComponent implements OnInit, OnDestroy {

  public subscriptions: Subscription[] = [];
  public entriesList: Entry[] = [];
  public selectedEntry? : Entry;

  constructor(
    private newsreaderService: NewsreaderService,
    private entryService: EntryService
  ) { }

  public ngOnInit(): void {
    this.subscriptions.push(
      this.newsreaderService.currentFeed$.subscribe(feed => {
        this.entryService.getEntries(feed.id!).subscribe(entries => {
          this.entriesList = entries;
        })
      })
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  public selectEntry(entry: Entry) {
    entry.readed = true;
    this.selectedEntry = entry;
    this.newsreaderService.currentEntry.next(entry);
    this.entryService.read(entry).subscribe();
  }
}
