import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const isApiRequest = req.url.startsWith(environment.backendUrl);

    if (isApiRequest) {
      const authToken = this.authService.getAuthorizationToken();
      if(authToken) {
        const authReq = req.clone({
          headers: req.headers.set('Authorization', 'Bearer ' + authToken)
        });
  
        return next.handle(authReq);
      }
    }

    return next.handle(req);
  }
}
