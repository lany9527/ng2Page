import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  inputs: ['counterValue: init'], //input 写法二
  outputs: ['counterChange: change'] //output写法二
})
export class CounterComponent implements OnInit {
  counterValue: number = 0; //input 写法二
  counterChange = new EventEmitter(); //output 写法二
  // @Input('init') counterValue: number; //input 写法一

  // @Output('change') counterChange = new EventEmitter(); //output 写法一

  constructor() { }
  increment(){
    this.counterValue++;
    this.counterChange.emit(this.counterValue);
  }
  decrement(){
    this.counterValue--;
    this.counterChange.emit(this.counterValue);
  }
  ngOnInit() {
  }

}
