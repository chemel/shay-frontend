import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../models/feed.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { JsonService } from './json.service';

@Injectable({
    providedIn: 'root'
})
export class FeedService {

    constructor(
        private http: HttpClient,
        private jsonService: JsonService
    ) { }

    public getAll(): Observable<Feed[]> {
        return this.http.get<Feed[]>(environment.backendUrl + '/feeds')
            .pipe(
                map(feeds => this.jsonService.deserializeArray(feeds, Feed))
            );
    }

    public create(feed: Feed): Observable<any> {
        const data = {
            'url': feed.url,
            'category': '/api/categories/' + feed.category?.id,
        };
        return this.http.post(environment.backendUrl + '/feeds', data);
    }

    public delete(feed: Feed): Observable<any> {
        return this.http.delete(environment.backendUrl + '/feeds/' + feed.id);
    }
}
