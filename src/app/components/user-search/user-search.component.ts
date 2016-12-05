import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

import {User} from "../../interface/user";
import {UserSearchService} from "../../services/user-search.service";

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css'],
  providers: [UserSearchService]
})
export class UserSearchComponent implements OnInit {
  users: Observable<User[]>;
  private searchTerms = new Subject<string>();
  constructor(
    private userSearchService: UserSearchService,
    private router: Router
  ) {}
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.users = this.searchTerms
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(term => term ? this.userSearchService.search(term) : Observable.of<User[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<User[]>([]);
      });
  }

  gotoDetail(user: User): void {
    let link = ['/usercenter/detail', user.id]; //TODO:路由有待修改
    this.router.navigate(link)
  }

}
