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
        localStorage.setItem('jwtToken', token);
    }

    public getJwt(): string {
        return localStorage.getItem('jwtToken')!;
    }

    public setUser(user: User): void {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.user.next(user);
    }

    public getUser(): User|boolean {
        const currentUserString = localStorage.getItem('currentUser')!;
        if(!currentUserString) {
            return false;
        }
        const currentUser = JSON.parse(currentUserString);
        let user = new User();
        Object.assign(user, currentUser);
        return user;
    }
}
