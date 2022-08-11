import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { Entry } from '../models/entry.model';

@Injectable()
export class EntryService {

    constructor(
        private http: HttpClient,
        private authService: AuthService,
    ) { }

    public getEntries(feedId: number): Observable<any> {
        return this.http.get(environment.backendUrl + '/entries?feed.id='+feedId, this.authService.getHeaders());
    }

    public read(entry: Entry): Observable<any> {
        const data = {
            'readed': true
        };

        const headers = this.authService.getHeaders({
            'Content-Type': 'application/merge-patch+json'
        });

        return this.http.patch(environment.backendUrl + '/entries/' + entry.id, data, headers);
    }
}
