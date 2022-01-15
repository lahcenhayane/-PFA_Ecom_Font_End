import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  
  constructor(private router:Router) { }


  saveToken(data:any){
    localStorage.setItem("token", data.Authorization)
    localStorage.setItem("username", data.username)
    localStorage.setItem("user", data.user)
  }
  removeToken(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
    localStorage.removeItem("user")
  }
  getToken(){
    return localStorage.getItem("token");
  }
  getUsername(){
    return localStorage.getItem("username");
  }
  getUser(){
    return localStorage.getItem("user");
  }

  getPayload(token:string){
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  isValid(){
    const token = this.getToken();
    const username = this.getUsername();
    if(token){
      const payload = this.getPayload(token);
      if(payload){
        return payload.sub == username;
      }
      return false;  
    }
    return false;
  }
  getInfo(){
    const token = this.getToken();
    if(token){
      const payload = this.getPayload(token);
      return payload ? payload : this.removeToken();
    }
    return this.removeToken();
  }
  
}
