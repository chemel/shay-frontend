import { HttpInterceptorFn, HttpRequest, HttpHandlerFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, EMPTY, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const isApiRequest = req.url.startsWith(environment.backendUrl);
  if (isApiRequest) {
    const authToken = authService.getJwt();
    if(authToken) {
      req = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });
    }
  }

  return next(req).pipe(
    catchError(err => {
      if(err instanceof HttpErrorResponse && err.status === 401) {
        router.navigate(['login']);
        return EMPTY;
      }
      return throwError(() => err);
    })
  );
};
