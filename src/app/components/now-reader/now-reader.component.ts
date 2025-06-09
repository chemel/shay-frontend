import { Component, OnInit } from '@angular/core';
import { Category } from '@app/models/category.model';
import { CategoryService } from '@app/services/category.service';
import { CommonModule } from '@angular/common';
import { EntryService } from '@app/services/entry.service';
import { Entry } from '@app/models/entry.model';

@Component({
  selector: 'app-now-reader',
  imports: [CommonModule],
  templateUrl: './now-reader.component.html',
  styleUrl: './now-reader.component.scss'
})
export class NowReaderComponent implements OnInit {

  public categories: Category[] = [];
  public selectedCategory: Category | null = null;
  public entries: Entry[] = [];
  public selectedEntry: Entry | null = null;

  constructor(
    private categoryService: CategoryService,
    private entryService: EntryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  onCategorySelect(category: Category): void {
    this.selectedCategory = category;

    this.entryService.getEntriesByCategory(category.id!).subscribe(entries => {
      this.entries = entries;
    })
  }

  onEntrySelect(entry: Entry): void {
    entry.readed = true;
    this.selectedEntry = entry;
    this.entryService.read(entry).subscribe();
    window.open(entry.permalink, '_blank');
  }
}
