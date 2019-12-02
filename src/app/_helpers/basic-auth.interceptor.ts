import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const username = environment.dexcomUserName;
    const password = environment.dexcomPassWord;

    const authReq = request.clone({
      setHeaders: {
        "Authorization": "Basic " + btoa(username + ':' + password),
        "Content-Type": "application/json"
      }
    });

    return next.handle(authReq);
  }

}
