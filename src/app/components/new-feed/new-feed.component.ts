import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Feed } from 'src/app/models/feed.model';
import { CategoryService } from 'src/app/services/category.service';
import { FeedService } from 'src/app/services/feed.service';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css'],
  imports: [DropdownModule, ReactiveFormsModule]
})
export class NewFeedComponent implements OnInit {
  public form: FormGroup;
  public categories: [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private feedService: FeedService,
    private categoryService: CategoryService
  ) {
    this.form = this.formBuilder.group({
      url: ['', Validators.required],
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
      const formData = this.form.value as Feed;
      this.feedService.create(formData).subscribe(data => {
        console.log(data);
      });
    }
  }
}
