import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsreaderService } from '@services/newsreader.service';
import { Entry } from '@app/models/entry.model';
import { SanitizeHtmlPipe } from '@app/pipes/sanitize-html.pipe';

@Component({
  selector: 'app-show-entry',
  imports: [CommonModule, SanitizeHtmlPipe],
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
