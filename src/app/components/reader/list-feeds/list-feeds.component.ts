
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Category } from '@models/category.model';
import { Feed } from '@models/feed.model';
import { CategoryService } from '@services/category.service';
import { FeedService } from '@services/feed.service';
import { NewsreaderService } from '@services/newsreader.service';

@Component({
  selector: 'app-list-feeds',
  templateUrl: './list-feeds.component.html',
  styleUrls: ['./list-feeds.component.css'],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: []
})
export class ListFeedsComponent implements OnInit {

  public feedsCategoriesList: Category[] = [];
  public feedsList: Feed[] = [];
  public selectedFeed?: Feed;
  
  constructor(
    private newsreaderService: NewsreaderService,
    private categoryService: CategoryService,
    private feedService: FeedService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.feedsCategoriesList = categories;
    });

    this.feedService.getAll().subscribe(data => {
      this.feedsList = data;
    });
  }

  public getFeedsForCategory(category: Category) {
    return this.feedsList.filter(f => {
      return f.category?.id === category.id;
    });
  }

  public selectFeed(feed: Feed) {
    this.selectedFeed = feed;
    this.newsreaderService.currentFeed.next(feed);
    this.newsreaderService.currentView.next('entries');
  }
}
