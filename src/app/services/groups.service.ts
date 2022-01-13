import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private _http:HttpClient) { }

  private readonly url:string = environment.URL
//http://localhost:8080/v1/accounts?p=0&s=20
  getGroup(page:number, size:number){
    return this._http.get(`${this.url}/v1/accounts?p=${page}&s=${size}`)
  }
}
