import { Component, OnInit } from '@angular/core';
import { Feed } from 'src/app/models/feed.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-list-feeds',
  templateUrl: './list-feeds.component.html',
  styleUrls: ['./list-feeds.component.css']
})
export class ListFeedsComponent implements OnInit {

  public feedsList: Feed[] = [];

  constructor(
    private feedService: FeedService
  ) { }

  ngOnInit(): void {
    this.feedService.getAll().subscribe(data => {
      this.feedsList = data['hydra:member'];
    })
  }

}
