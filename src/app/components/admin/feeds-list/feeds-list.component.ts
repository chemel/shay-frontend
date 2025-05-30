import { Component, OnInit } from '@angular/core';
import { Feed } from '@app/models/feed.model';
import { FeedService } from '@app/services/feed.service';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feeds-list',
  imports: [
    CommonModule,
    ButtonModule,
    ConfirmDialogModule,
  ],
  providers: [ConfirmationService],
  templateUrl: './feeds-list.component.html',
  styleUrls: ['./feeds-list.component.scss']
})
export class FeedsListComponent implements OnInit {
  public feedsList: Feed[] = [];

  constructor(
    private feedService: FeedService,
    private confirmationService: ConfirmationService,
  ) {
  }

  ngOnInit(): void {
    this.loadFeeds();
  }

  private loadFeeds(): void {
    this.feedService.getAll().subscribe(feeds => {
      this.feedsList = feeds;
    });
  }

  public deleteFeed(feed: Feed): void {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the feed "${feed.title}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.feedService.delete(feed).subscribe(() => {
          this.loadFeeds();
        });
      }
    });
  }
}
