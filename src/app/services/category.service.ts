import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Category } from '@app/models/category.model';
import { JsonService } from './json.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private http: HttpClient,
        private jsonService: JsonService
    ) { }

    public getAll(): Observable<Category[]> {
        return this.http.get<Category[]>(environment.backendUrl + '/categories')
            .pipe(
                map(categories => this.jsonService.deserializeArray(categories, Category))
            );
    }
}
