import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/services/auth/account.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenService } from 'src/app/services/auth/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService,
              private _token:TokenService, 
              private _account:AccountService,
              private _route:Router) { }

  ngOnInit(): void {
  }

  formLogin = new FormGroup({
    username: new FormControl(null),
    password: new FormControl(null)
  })

  login(){
    this._auth.login(this.formLogin.value).subscribe(
      res=>this.token(res),
      err=>console.log(err.message)
    );
  }

  token(res:any){
    console.log(res);
    
    this._token.saveToken(res);
    this._account.setAccount(true);
    this._route.navigateByUrl("/dashboard")
  }
}
