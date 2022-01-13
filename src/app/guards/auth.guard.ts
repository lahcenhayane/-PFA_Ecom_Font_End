import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/auth/account.service';
import { TokenService } from '../services/auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private _account:AccountService, private _token:TokenService, private route:Router ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):Observable<boolean> | boolean {
      
      if (!this._token.isValid()) {
        this._token.removeToken()
        this._account.setAccount(this._token.isValid())
        this.route.navigateByUrl("/login")
        return false;
      }
      
      return true;
  }
  
}
