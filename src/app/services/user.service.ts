import { Injectable } from '@angular/core';
import {User} from "../interface/user";
import {USERS} from "../mock-users";
@Injectable()
export class UserService {

  constructor() { }
  getUsers(): Promise<User[]> {
    return Promise.resolve(USERS);
  }
  getUser(id: number): Promise<User> {
    return Promise.resolve(USERS);
  }
}
