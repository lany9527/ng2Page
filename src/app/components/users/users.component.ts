import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserService]

})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  constructor(private userService: UserService) {}
  getUsers():void{
    this.userService.getUsers().then(users => this.users = users);
  }
  onSelect(user: User): void{
    this.selectedUser = user;
  }

  ngOnInit() {
    this.getUsers();
  }
}
