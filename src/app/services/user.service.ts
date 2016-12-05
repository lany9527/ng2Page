import { Injectable } from '@angular/core';
import {User} from "../interface/user";
// import {USERS} from "../mock-users";
import {Http, Headers} from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  private usersUrl = 'app/users'; //TODO: 路径存疑
  private headers = new Headers({'Content-Type': 'application/json'});

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
  update(user: User): Promise<User> {
    const url = `${this.usersUrl}/${user.id}`;
    return this.http
      .put(url, JSON.stringify(user), {headers: this.headers})
      .toPromise()
      .then(()=>user)
      .catch(this.handleError);
  }
  create(name: string): Promise<User> {
    return this.http
      .post(this.usersUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data)
      .catch(this.handleError);
  }
  delete(id: number): Promise<void>{
    const url = `${this.usersUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(()=>null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any>{
    console.error('发生了一个错误：', error);
    return Promise.reject(error.message || error);
  }
}
