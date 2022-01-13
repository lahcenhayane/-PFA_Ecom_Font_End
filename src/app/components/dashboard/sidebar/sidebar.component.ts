import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/auth/token.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private _token:TokenService) { }

  username:any =""

  ngOnInit(): void {
    this.username = this._token.getUsername();
  }

}
