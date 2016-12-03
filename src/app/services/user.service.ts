import { Injectable } from '@angular/core';
import {User} from "../interface/user";
import {USERS} from "../mock-users";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private usersUrl = 'app/users'; //TODO: 路径存疑
  constructor(private http: Http) { }
  getUsers(): Promise<User[]> {
    return this.http.get(this.usersUrl)
      .toPromise()
      .then(response => response.json().data as User[])
      .catch(this.handleError)
  }
  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(users => users.find(user => user.id === id))
  }
  private handleError(error: any): Promise<any>{
    console.error('发生了一个错误：', error);
    return Promise.reject(error.message || error);
  }
}
