import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-createa-account',
  templateUrl: './createa-account.component.html',
  styleUrls: ['./createa-account.component.css']
})
export class CreateaAccountComponent implements OnInit {

  constructor(private _user:UserService, private _route:Router) { }

  ngOnInit(): void {
  }

  create_new_user = new FormGroup({
    firstName:new FormControl("", [Validators.required]),
    lastName:new FormControl("", [Validators.required]),
    userName:new FormControl("", [Validators.required]),
    email:new FormControl("", [Validators.required, Validators.email]),
    password:new FormControl("", [Validators.required]),
    city:new FormControl("", [Validators.required]),
    phoneNumber:new FormControl("", [Validators.required]),
  })

  f_create_user(){
    if (this.create_new_user.valid) {
      this._user.f_create(this.create_new_user.value).subscribe(
        res=>this._route.navigateByUrl("/login"),
        err=>console.log(err)
      )  
    }
  }

}
