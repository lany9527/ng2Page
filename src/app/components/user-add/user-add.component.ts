import {Component, OnInit, Injectable, Input, OnChanges} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {EmitterService} from "../../services/emitter.service";
@Component({
  selector: 'user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnChanges {
  user: any = {};
  @Input() listId: string;
  constructor(public http: Http) { }

  ngOnInit() {
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
        console.log(user);
        EmitterService.get(this.listId).emit(user)
      }, (error) => {
        console.log(error)
      });

  }

  ngOnChanges(){
    EmitterService.get(this.listId).subscribe(data=>{
      this.user = data;
    })
  }
}
