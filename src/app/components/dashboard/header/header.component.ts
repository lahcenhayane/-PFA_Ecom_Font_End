import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/auth/token.service';
import { HomeDashboardService } from 'src/app/services/home-dashboard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private _homeService:HomeDashboardService, private _token:TokenService) { }

  // users:User={}
  count_user:number = 0
  count_category:number = 0
  count_product:number = 0
  count_order:number = 0

  ngOnInit(): void {
    this.countUser()  
    this.countProduct()
    this.countOrder()
    this.countCategory()
  }

  countUser(){
    this._homeService.countUser().subscribe(
      res=>this.count_user = res
    );
  }

  countProduct(){
    this._homeService.countProduct().subscribe(
      res=>this.count_product = res
    );
  }

  countOrder(){
    this._homeService.countOrder().subscribe(
      res=>this.count_order = res
    );
  }

  countCategory(){
    this._homeService.countCategory().subscribe(
      res=>this.count_category = res
    );
  }

}
