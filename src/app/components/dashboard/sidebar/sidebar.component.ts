import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _token:TokenService, private _router:Router) { }

  user:any =""

  ngOnInit(): void {
    this.user = this._token.getUser();
  }


  logout(){
    this._token.removeToken()
    this._router.navigateByUrl('/login')
  }

}
