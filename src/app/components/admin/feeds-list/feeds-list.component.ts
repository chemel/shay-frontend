import { Component, OnInit } from '@angular/core';
import { Feed } from '@app/models/feed.model';
import { FeedService } from '@app/services/feed.service';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-feeds-list',
  imports: [TableModule, ButtonModule, ConfirmDialogModule],
  providers: [ConfirmationService],
  templateUrl: './feeds-list.component.html',
  styleUrl: './feeds-list.component.scss'
})
export class FeedsListComponent implements OnInit {
  public feedsList: Feed[] = [];

  constructor(
    private feedService: FeedService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit(): void {
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
          this.feedsList = this.feedsList.filter(f => f.id !== feed.id);
        });
      }
    });
  }
}
