import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HomeDashboardService {

  constructor(private _http:HttpClient, private _router:Router) { }

  private readonly url:String = environment.URL

  getUserById(id:number){
    console.log(this._http.get<User>("http://localhost:8080/api/users/1"));
    return this._http.get<User>("http://localhost:8080/api/users/1") 
  }


  countUser(){
    return this._http.get<number>(`${this.url}/users/count`);
  }
  countCategory(){
    return this._http.get<number>(`${this.url}/categories/count`);
  }
  countProduct(){
    return this._http.get<number>(`${this.url}/products/count`);
  }
  countOrder(){
    return this._http.get<number>(`${this.url}/orders/count`);
  }
}
