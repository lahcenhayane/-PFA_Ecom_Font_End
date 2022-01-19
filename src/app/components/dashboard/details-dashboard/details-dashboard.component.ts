import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Order } from 'src/app/models/order';
import { Pageable } from 'src/app/models/pageable';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-details-dashboard',
  templateUrl: './details-dashboard.component.html',
  styleUrls: ['./details-dashboard.component.css']
})
export class DetailsDashboardComponent implements OnInit {

  constructor(private _userServise:UserService, private _route:ActivatedRoute, private _toastr:ToastrService) { }

  readonly userID:any = this._route.snapshot.paramMap.get('id')

  orders:Pageable={
    content:[],
    totalPages:0,
    totalElements:0,
    number:0
  }
  // order:Order{
  //   total:0,
  //   address:Address
  // }
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


  ngOnInit(): void {
    this.f_getUserByID(this.userID)
    this.f_getUserByIdWithOrder(0,2)
  }

  f_getUserByID(userId:Number){
    this._userServise.f_getUser(userId).subscribe(
      res => {
        this.user = res
      },
      err => this._toastr.error(err.error.message.split(':')[0] + " "+this.userID)
    )
  }

  f_getUserByIdWithOrder(page:Number, size:Number){
    this._userServise.f_getUserByIdWithOrder(this.userID, page, size).subscribe(
      res=>{
        this.orders = res
        console.log(this.orders)
      },
      err=>console.log(err)
    )
  }
}
