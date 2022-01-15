import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';


@Component({
  selector: 'app-navbar-dashboard',
  templateUrl: './navbar-dashboard.component.html',
  styleUrls: ['./navbar-dashboard.component.css']
})
export class NavbarDashboardComponent implements OnInit {

  constructor(private _token:TokenService, private route:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this._token.removeToken()
    this.route.navigateByUrl('/login')
  }

}
