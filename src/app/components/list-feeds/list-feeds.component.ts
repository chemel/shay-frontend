import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/feed.model';
import { FeedService } from 'src/app/services/feed.service';
import { NewsreaderService } from 'src/app/services/newsreader.service';

@Component({
  selector: 'app-list-feeds',
  templateUrl: './list-feeds.component.html',
  styleUrls: ['./list-feeds.component.css']
})
export class ListFeedsComponent implements OnInit {

  public feedsList: Feed[] = [];

  constructor(
    private newsreaderService: NewsreaderService,
    private feedService: FeedService
  ) { }

  ngOnInit(): void {
    this.feedService.getAll().subscribe(data => {
      this.feedsList = data['hydra:member'];
    });
  }

  public selectFeed(feed: Feed) {
    this.newsreaderService.currentFeed$.next(feed);
  }
}
