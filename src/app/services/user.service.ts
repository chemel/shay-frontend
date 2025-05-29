import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '@app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(
        private http: HttpClient
    ) { }

    public getCurrentUser(): Observable<User> {
        return this.http.get<User>(environment.backendUrl + '/users/whoami');
    }
}