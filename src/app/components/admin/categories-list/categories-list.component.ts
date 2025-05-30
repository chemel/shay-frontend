import { Component, OnInit } from '@angular/core';
import { Category } from '@app/models/category.model';
import { CategoryService } from '@app/services/category.service';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories-list',
  imports: [CommonModule, ButtonModule, ConfirmDialogModule, InputTextModule, ReactiveFormsModule],
  providers: [ConfirmationService],
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent implements OnInit {
  public categories: Category[] = [];
  public categoryForm: FormGroup;

  constructor(
    private categoryService: CategoryService,
    private confirmationService: ConfirmationService,
    private formBuilder: FormBuilder
  ) {
    this.categoryForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }

  ngOnInit(): void {
    this.loadCategories();
  }

  private loadCategories(): void {
    this.categoryService.getAll().subscribe(categories => {
      this.categories = categories;
    });
  }

  public addCategory(): void {
    if (this.categoryForm.valid) {
      const newCategory = new Category();
      newCategory.name = this.categoryForm.get('name')?.value.trim();
      
      this.categoryService.create(newCategory).subscribe(() => {
        this.loadCategories();
        this.categoryForm.reset();
      });
    }
  }

  public deleteCategory(category: Category): void {
    this.confirmationService.confirm({
      message: `Are you sure you want to delete the category "${category.name}"?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-exclamation-triangle',
      acceptButtonStyleClass: 'p-button-danger',
      rejectButtonStyleClass: 'p-button-secondary',
      accept: () => {
        this.categoryService.delete(category).subscribe(() => {
          this.loadCategories();
        });
      }
    });
  }
}
