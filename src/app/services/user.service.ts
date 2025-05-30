import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '@app/models/user.model';
import { JsonService } from './json.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient,
        private jsonService: JsonService
    ) { }

    public getCurrentUser(): Observable<User> {
        return this.http.get<User>(environment.backendUrl + '/users/whoami')
            .pipe(
                map(user => this.jsonService.deserialize(user, User))
            );
    }
}