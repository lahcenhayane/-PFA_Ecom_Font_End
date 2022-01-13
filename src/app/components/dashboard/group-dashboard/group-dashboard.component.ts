 import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/auth/token.service';
import { GroupsService } from 'src/app/services/groups.service';

@Component({
  selector: 'app-group-dashboard',
  templateUrl: './group-dashboard.component.html',
  styleUrls: ['./group-dashboard.component.css']
})
export class GroupDashboardComponent implements OnInit {

  constructor(private _groupe:GroupsService, private _token:TokenService) { }

  ngOnInit(): void {
    this.f_get_groups(0, 20)
    console.log(this._token.getToken());
    
  }


  f_get_groups(p:number, s:number){
    this._groupe.getGroup(p,s).subscribe(
      res=>console.log(res),
      err=>console.log(err)
    )
  }

}
