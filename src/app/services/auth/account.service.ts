import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _token:TokenService) { }

  private account = new BehaviorSubject<boolean>(this._token.isValid())
  status = this.account.asObservable()
  setAccount(status:boolean){
    this.account.next(status)
  }

}
