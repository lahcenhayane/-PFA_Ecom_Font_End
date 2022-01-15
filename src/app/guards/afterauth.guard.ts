import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountService } from '../services/auth/account.service';
import { TokenService } from '../services/auth/token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterauthGuard implements CanActivate {

  constructor(private _token:TokenService, 
              private _account:AccountService, 
              private _route:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {

      if (this._token.isValid()) {
        this._route.navigateByUrl('/dashboard')
        return false;
      }
      return true;
  }
  
}
