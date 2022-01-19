import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pageable } from '../models/pageable';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  private readonly url:string = environment.URL;

  f_create(data:any){
    return this._http.post(`${this.url}/users`, data)
  }
  //localhost:8080/api/users?page=100&size=2
  f_getUsers(page:Number, size:Number){
    return this._http.get<Pageable>(`${this.url}/users?page=${page}&size=${size}`);
  }

  f_getUser(id:Number){
    return this._http.get<User>(`${this.url}/users/${id}`);
  }

  f_deleteUser(id:Number){
    return this._http.delete(`${this.url}/users/${id}`);
  }

  f_getUserByIdWithOrder(id:Number, p:Number, s:Number){
    return this._http.get<Pageable>(`${this.url}/orders/${id}/details?page=${p}&size=${s}`);
  }
}
