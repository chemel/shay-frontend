import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Category } from '@app/models/category.model';
import { Feed } from 'src/app/models/feed.model';
import { CategoryService } from 'src/app/services/category.service';
import { FeedService } from 'src/app/services/feed.service';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css'],
  imports: [DropdownModule, ReactiveFormsModule, ToastModule],
  providers: [MessageService]
})
export class NewFeedComponent implements OnInit {
  public form: FormGroup;
  public isLoading: boolean = false;
  public categories: Category[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private feedService: FeedService,
    private categoryService: CategoryService,
    private messageService: MessageService,
    private router: Router
  ) {
    this.form = this.formBuilder.group({
      url: ['', [Validators.required, Validators.pattern('^https?://[^\\s/$.?#].[^\\s]*$')]],
      category: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  public onSubmit() {
    if(this.form.valid) {
      this.isLoading = true;
      const formData = this.form.value as Feed;
      this.feedService.create(formData).subscribe({
        next: () => {
          this.messageService.add({
            severity: 'success',
            summary: 'Success',
            detail: 'Feed has been successfully added'
          });
          setTimeout(() => {
            this.router.navigate(['/reader']);
          }, 1500);
        },
        error: (error) => {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'Failed to add feed. Please try again.'
          });
          this.isLoading = false;
        }
      });
    }
  }
}
