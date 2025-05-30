import { Component, OnInit } from '@angular/core';
import { ListEntriesComponent } from '../list-entries/list-entries.component';
import { ShowEntryComponent } from '../show-entry/show-entry.component';
import { ListFeedsComponent } from '../list-feeds/list-feeds.component';

@Component({
  selector: 'app-layout-newsreader',
  templateUrl: './layout-newsreader.component.html',
  styleUrls: ['./layout-newsreader.component.css'],
  imports: [ListFeedsComponent, ListEntriesComponent, ShowEntryComponent]
})
export class LayoutNewsreaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
