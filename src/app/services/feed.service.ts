import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../models/feed.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) { }

    public getAll(): Observable<any> {
        return this.http.get(environment.backendUrl + '/feeds');
    }

    public create(feed: Feed): Observable<any> {
        const data = {
            'url': feed.url,
            'category': '/api/categories/' + feed.category?.id,
        };
        return this.http.post(environment.backendUrl + '/feeds', data);
    }
}
