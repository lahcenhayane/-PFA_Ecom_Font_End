import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http:HttpClient) { }

  private readonly url:String = environment.URL

  
  login(login:{username:String, password:String}){
    return this._http.post(`${this.url}/login`, login);
  }

  

}
