import { Component, OnInit } from '@angular/core';
import {CounterComponent} from "../counter/counter.component";

@Component({
  selector: 'app-demo-component',
  templateUrl: 'demo-component.component.html',
  styleUrls: ['demo-component.component.css'],
  directives: [CounterComponent]
})

export class DemoComponentComponent implements OnInit {
  public parentValue: number = 2;
  fromChild: number;
  constructor() { }
  parentValueChange(event) {
    this.fromChild = event;
    console.log(event);
  }
  ngOnInit() {
  }

}
