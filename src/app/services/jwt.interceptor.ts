import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from './auth/token.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private _token:TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    request.clone({
      setHeaders:{
        Authorization:`${this._token.getToken()}`
      }
    })

    return next.handle(request);
  }
}
