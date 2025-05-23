import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) { }

    public getAll(): Observable<any> {
        return this.http.get(environment.backendUrl + '/categories');
    }
}
