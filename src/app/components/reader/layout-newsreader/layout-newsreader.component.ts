import { Component } from '@angular/core';
import { ListEntriesComponent } from '../list-entries/list-entries.component';
import { ShowEntryComponent } from '../show-entry/show-entry.component';
import { ListFeedsComponent } from '../list-feeds/list-feeds.component';

type ViewType = 'feeds' | 'entries' | 'reader';

@Component({
  selector: 'app-layout-newsreader',
  templateUrl: './layout-newsreader.component.html',
  styleUrls: ['./layout-newsreader.component.css'],
  imports: [ListFeedsComponent, ListEntriesComponent, ShowEntryComponent]
})
export class LayoutNewsreaderComponent {
  public currentView: ViewType = 'feeds';

  public showFeeds(): void {
    this.currentView = 'feeds';
  }

  public showEntries(): void {
    this.currentView = 'entries';
  }

  public showReader(): void {
    this.currentView = 'reader';
  }
}
