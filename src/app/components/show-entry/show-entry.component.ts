import { Component, OnInit } from '@angular/core';
import { NewsreaderService } from 'src/app/services/newsreader.service';
import { Entry } from 'src/app/models/entry.model';

@Component({
  selector: 'app-show-entry',
  templateUrl: './show-entry.component.html',
  styleUrls: ['./show-entry.component.css']
})
export class ShowEntryComponent implements OnInit {

  public entry?: Entry;

  constructor(
    private newsreaderService: NewsreaderService,
  ) { }

  ngOnInit(): void {
    this.newsreaderService.currentEntry$.subscribe(entry => {
      this.entry = entry;
    })
  }

}
