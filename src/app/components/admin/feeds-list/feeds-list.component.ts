import { Component, OnInit } from '@angular/core';
import { Feed } from '@app/models/feed.model';
import { FeedService } from '@app/services/feed.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-feeds-list',
  imports: [TableModule, ButtonModule],
  templateUrl: './feeds-list.component.html',
  styleUrl: './feeds-list.component.scss'
})
export class FeedsListComponent implements OnInit {
  public feedsList: Feed[] = [];

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feedService.getAll().subscribe(feeds => {
      this.feedsList = feeds;
    });
  }

  public deleteFeed(feed: Feed): void {
    this.feedService.delete(feed).subscribe(() => {
      this.feedsList = this.feedsList.filter(f => f.id !== feed.id);
    });
  }
}
