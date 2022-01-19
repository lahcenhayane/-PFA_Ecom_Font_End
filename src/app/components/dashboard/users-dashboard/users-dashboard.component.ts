import { Component, OnInit } from '@angular/core';
import { Pageable } from 'src/app/models/pageable';
import { UserService } from 'src/app/services/user.service';
import { environment } from 'src/environments/environment';
import { User } from "src/app/models/user";
import { ActivatedRoute, Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.css']
})
export class UsersDashboardComponent implements OnInit {

  constructor(private _userService:UserService,
              private _route:ActivatedRoute,
              private _router:Router,
              private _token:TokenService,
              private _toastr: ToastrService) {
  }

  private readonly size:Number = environment.SIZE
  readonly email:String = this._token.getInfo();

  users:Pageable = {
    content:[],
    totalPages:0,
    totalElements:0,
    number:0
  } //All Users.

  user:User = {
    id:0,
    firstname:"",
    lastname:"",
    username:"",
    email:"",
    password:"",
    city:"",
    phone:"",
    enabled:false,
    roles:[],
    orders:[]
  }

  page:any = this._route.snapshot.queryParamMap.get('p');
  ngOnInit(): void {
    if(this.page>0){
      this.getAllUser(this.page)
    }else{
      this.getAllUser(0);
    }
  }

// Start Get Users
  getAllUser(page:Number): void{
    
    this._userService.f_getUsers(page, this.size).subscribe(
      res=>this.users = res,
      err=>console.log(err)
    )
  }
// End Get Users


// Start Delete User
delete(id:Number, email:String){
  if (this.email != email) {
    this._userService.f_deleteUser(id).subscribe(
      ()=> this.users.content = this.users.content.filter(row=>row.id != id),
      err=>console.log(err)
    ); 
  }
}
// End Delete User

searchByID(event:any){

  if (event.target.value != "") {
    this._userService.f_getUser(event.target.value).subscribe(
      res=>{
        this.users.content = []
        this.users.number = this.users.totalElements = this.users.totalPages = -1
        this.users.content.push(res);

      },
      err=> {
        this._toastr.error(err.error.message.split(':')[0] + " "+event.target.value)
      }
    )
  }else{
    this.getAllUser(0);
  }
}





}
