import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '@app/models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    public user: Subject<User> = new Subject<User>();
    public user$: Observable<User>;
    
    constructor(
        private http: HttpClient
    ) {
        this.user$ = this.user.asObservable();
    }

    public login(username: string, password: string): Observable<any> {
        const formData = {
            'username': username,
            'password': password
        };

        return this.http.post(environment.backendUrl + '/login', formData);
    }

    public setJwt(token: string): void {
        localStorage.setItem('jwt', token);
    }

    public getJwt(): string {
        return localStorage.getItem('jwt')!;
    }
}
