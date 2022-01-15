import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { TokenService } from 'src/app/services/auth/token.service';
import { HomeDashboardService } from 'src/app/services/home-dashboard.service';

@Component({
  selector: 'app-home-dashboard',
  templateUrl: './home-dashboard.component.html',
  styleUrls: ['./home-dashboard.component.css']
})
export class HomeDashboardComponent implements OnInit {

  constructor(private _homeService:HomeDashboardService, private _token:TokenService) { }

  ngOnInit(): void {
  }


}
