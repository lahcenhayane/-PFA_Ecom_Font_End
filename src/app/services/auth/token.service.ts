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
  }
  removeToken(){
    localStorage.removeItem("token")
    localStorage.removeItem("username")
  }
  getToken(){
    return localStorage.getItem("token");
  }
  getUsername(){
    return localStorage.getItem("username");
  }

  getPayload(token:string){
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  isValid(){
    const token = this.getToken();
    if(token){
      const payload = this.getPayload(token);
      if(payload && (payload == this.getUsername())){
        return true;
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
