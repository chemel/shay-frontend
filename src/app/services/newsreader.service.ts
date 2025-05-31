import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Entry } from '../models/entry.model';
import { Feed } from '../models/feed.model';
type ViewType = 'feeds' | 'entries' | 'reader';

@Injectable({
    providedIn: 'root'
})
export class NewsreaderService {

    public currentFeed: Subject<Feed> = new Subject<Feed>();
    public currentFeed$: Observable<Feed>;

    public currentEntry: Subject<Entry> = new Subject<Entry>();
    public currentEntry$: Observable<Entry>;

    public currentView: Subject<ViewType> = new Subject<ViewType>();
    public currentView$: Observable<ViewType>;

    constructor() {
        this.currentFeed$ = this.currentFeed.asObservable();
        this.currentEntry$ = this.currentEntry.asObservable();
        this.currentView$ = this.currentView.asObservable();
    }
}
