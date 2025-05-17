import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Entry } from '../models/entry.model';
import { Feed } from '../models/feed.model';

@Injectable({
    providedIn: 'root'
})
export class NewsreaderService {

    public currentFeed: Subject<Feed> = new Subject<Feed>();
    public currentFeed$: Observable<Feed>;

    public currentEntry: Subject<Entry> = new Subject<Entry>();
    public currentEntry$: Observable<Entry>;

    constructor() {
        this.currentFeed$ = this.currentFeed.asObservable();
        this.currentEntry$ = this.currentEntry.asObservable();
    }
}
