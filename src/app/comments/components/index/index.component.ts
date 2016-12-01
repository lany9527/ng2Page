import { Component, OnInit, Injectable, Input } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'comment-widget',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class CommentComponent implements OnInit {

  Lists: any;
  constructor(public http: Http) { }
  getUser() {
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
    this.getUser();
  }

}
