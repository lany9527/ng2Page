import { Component, OnInit } from '@angular/core';
import {DemoPipePipe} from "../../pipe/demo-pipe.pipe";

@Component({
  selector: 'app-basic-pipes',
  templateUrl: './basic-pipes.component.html',
  styleUrls: ['./basic-pipes.component.css'],
  // pipes: [DemoPipePipe]
})
export class BasicPipesComponent implements OnInit {
  date: Date;
  grade: number;
  rating: number;
  temperature: number;
  // promise: Promise;
  constructor() {
    this.date = new Date();
    this.grade = 0.9996;
    this.rating = 9.2456;
    this.temperature = 85;
  }

  ngOnInit() {
  }

}
