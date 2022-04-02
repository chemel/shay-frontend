import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feed } from 'src/app/models/feed.model';
import { FeedService } from 'src/app/services/feed.service';

@Component({
  selector: 'app-new-feed',
  templateUrl: './new-feed.component.html',
  styleUrls: ['./new-feed.component.css']
})
export class NewFeedComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private feedService: FeedService
  ) {
    this.form = this.formBuilder.group({
      url: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  public onSubmit() {
    const formData = this.form.value as Feed;
    this.feedService.create(formData).subscribe(data => {
      console.log(data);
    });
  }
}
