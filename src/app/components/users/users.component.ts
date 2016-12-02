import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css'],
  providers: [UserService]

})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  constructor(
    private router: Router,
    private userService: UserService
  ) {}
  getUsers():void{
    this.userService.getUsers().then(users => this.users = users);
  }
  onSelect(user: User): void{
    this.selectedUser = user;
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }
  ngOnInit() {
    this.getUsers();
  }
}
