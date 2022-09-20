import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse
} from '@angular/common/http';
import { catchError, EMPTY, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isApiRequest = req.url.startsWith(environment.backendUrl);
    if (isApiRequest) {
      const authToken = this.authService.getAuthorizationToken();
      if(authToken) {
        req = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
      }
    }

    return next.handle(req).pipe(
      catchError(err => {
        if(err instanceof HttpErrorResponse && err.status === 401) {
          return this.handleUnauthorized(req, next);
        }
        return throwError(() => err);
      })
    );
  }

  private handleUnauthorized(req: HttpRequest<any>, next: HttpHandler) {
    this.router.navigate(['login']);
    return EMPTY;
  }
}
