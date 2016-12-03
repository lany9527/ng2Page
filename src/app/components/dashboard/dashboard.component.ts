import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {User} from "../../interface/user";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [UserService]
})
export class DashboardComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getUsers()
      .then(users => this.users = users.slice(1,5))
  }
}
