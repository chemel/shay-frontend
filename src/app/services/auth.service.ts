import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthService {

    public jwtToken: Subject<string> = new Subject<string>();
    public jwtToken$: Observable<string>;

    constructor(
        private http: HttpClient
    ) {
        this.jwtToken$ = this.jwtToken.asObservable();
    }

    public login(username: string, password: string): Observable<any> {
        const formData = {
            'username': username,
            'password': password
        };
        return this.http.post(environment.backendUrl + '/authentication_token', formData);
    }

    public getHeaders() {
        const jwtToken = localStorage.getItem('jwtToken');
        return {
            headers: new HttpHeaders({
                // 'Content-Type': 'application/text',
                'Authorization': 'Bearer ' + jwtToken
            })
          };
    }
}
