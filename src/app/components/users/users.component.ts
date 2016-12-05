import { Component, OnInit } from '@angular/core';
import {User} from "../../interface/user";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
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
    this.router.navigate(['/usercenter/detail', this.selectedUser.id]);
  }
  add(name: string): void {
    name = name.trim();//从字符串中移除前导空格、尾随空格和行终止符。
    if (!name) {return;}
    this.userService.create(name)
      .then(user => {
        this.users.push(user);
        this.selectedUser = null;
      })
  }
  delete(user: User): void {
    this.userService
      .delete(user.id)
      .then(()=>{
        this.users = this.users.filter(u=> u!==user);
        if (this.selectedUser === user) {
          this.selectedUser = null;
        }
      });
  }
  ngOnInit() {
    this.getUsers();
  }
}
