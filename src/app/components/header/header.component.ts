import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  items: Items[];
  constructor() {
    this.items = [
      {path: '/', title: 'Home'},
      {path: '/demo', title: 'Demo'}
    ];
  }

  ngOnInit() {
  }

}
interface Items {
  path: string,
  title: string
}