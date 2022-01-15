import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http:HttpClient) { }

  private readonly url:string = environment.URL;

  f_create(data:any){
    return this._http.post(`${this.url}/users`, data)
  }
}
