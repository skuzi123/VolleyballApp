import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,} from '@angular/common/http';
import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let authReq = req;
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    if (token != null) {
      // for Spring Boot back-end
      authReq = req.clone({
        headers: req.headers.set(TOKEN_HEADER_KEY, `Bearer ${token}`),
      });
    }
    // console.log('UserId:',id);

    return next.handle(authReq);
  }
}
