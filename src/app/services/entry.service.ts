import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Entry } from '../models/entry.model';
import { JsonService } from './json.service';

@Injectable({
    providedIn: 'root'
})
export class EntryService {

    constructor(
        private http: HttpClient,
        private jsonService: JsonService
    ) { }

    public getEntries(feedId: string): Observable<Entry[]> {
        return this.http.get<Entry[]>(environment.backendUrl + '/entries?feed.id='+feedId)
            .pipe(
                map(entries => this.jsonService.deserializeArray(entries, Entry))
            );
    }

    public read(entry: Entry): Observable<any> {
        const data = {
            'readed': true
        };

        const options = {
            headers: {
                'Content-Type': 'application/merge-patch+json'
            }
        };

        return this.http.patch(environment.backendUrl + '/entries/' + entry.id, data, options);
    }
}
