import {Component, OnInit, Injectable, Input} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  Lists: any;
  user: any = {};

  constructor(public http: Http) {
  }



  // 添加用户
  addUser(user) {
    console.log("add user");
    let bodyString = JSON.stringify(user);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    return this.http.post('http://localhost:8080/api/users', bodyString, options)
      .map((res) => {
        res.json()
      })
      // .catch((error) => { Observable.throw(error.json().error) })
      .subscribe((user) => {
        console.log(user)
      }, (error) => {
        console.log(error)
      });

  }

  // 编辑用户信息
  modifyUser() {
    console.log("modifyUser");
  }

  // 删除用户
  deleteUser(id: string) {
    console.log('deleteUser');
    return this.http.delete('http://localhost:8080/api/users/' + `${id}`)
      .map((res) => {
        res.json()
      })
      .subscribe((user) => {
        console.log(user);
    },
          (error) => {
          console.log(error)
        }
      );
  }

  ngOnInit() {
    // this.getUsers();
  }

}
