import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Feed } from '../models/feed.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable()
export class FeedService {

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) { }

    public getAll(): Observable<any> {
        return this.http.get(environment.backendUrl + '/feeds');
    }

    public create(feed: Feed): Observable<any> {
        return this.http.post(environment.backendUrl + '/feeds', feed);
    }
}
