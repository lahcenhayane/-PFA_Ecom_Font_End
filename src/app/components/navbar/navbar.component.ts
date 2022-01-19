import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private _token:TokenService) { }

  isLogin?:Boolean;

  ngOnInit(): void {
    this.isLogin = this._token.isValid()
  }

  

}
