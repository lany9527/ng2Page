import { Component, OnInit } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  Lists: any;
  user: any = {};
  constructor(public http: Http) { }

  // 获取用户列表
  getUsers() {
    if (this.Lists) {
      return Promise.resolve(this.Lists);
    } else {
      return new Promise(resolve => {
        this.http.get('http://localhost:8080/api/users')
          .map(res => res.json())
          .subscribe(data => {
            this.Lists = data;
            console.log(this.Lists);
            resolve(this.Lists);
          })
      })
    }

  }

  ngOnInit() {
    this.getUsers();
  }

}
