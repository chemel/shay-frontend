import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category.model';
import { Feed } from 'src/app/models/feed.model';
import { CategoryService } from 'src/app/services/category.service';
import { FeedService } from 'src/app/services/feed.service';
import { NewsreaderService } from 'src/app/services/newsreader.service';

@Component({
  selector: 'app-list-feeds',
  templateUrl: './list-feeds.component.html',
  styleUrls: ['./list-feeds.component.css'],
  imports: [CommonModule]
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
      return f.category == ('/api/categories/' + category.id);
    });
  }

  public selectFeed(feed: Feed) {
    this.selectedFeed = feed;
    this.newsreaderService.currentFeed.next(feed);
  }
}
