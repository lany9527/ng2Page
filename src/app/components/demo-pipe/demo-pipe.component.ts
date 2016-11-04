import {Component, OnInit} from '@angular/core';
import {FilterPipe} from "../../pipe/filter.pipe";

@Component({
  selector: 'app-demo-pipe',
  templateUrl: './demo-pipe.component.html',
  styleUrls: ['./demo-pipe.component.css'],
  pipes: [FilterPipe]
})
export class DemoPipeComponent implements OnInit {
  numbers: Array<number>;
  players: Players[];
  teams: Teams[];
  name: string = "littlestone";
  constructor() {
    this.numbers = [
      1, 2, 8, 9, 10, 11, 12, 13, 14, 20, 22, 31, 32, 41, 33
    ];
    this.players = [
      {
        "firstName": "Morgan",
        "lastName": "Benton",
        "username": "mbenton",
        "teamId": 1
      },
      {
        "firstName": "Kelsey",
        "lastName": "Banks",
        "username": "kbanks",
        "teamId": 1
      },
      {
        "firstName": "Jessica",
        "lastName": "Martinez",
        "username": "jmartinez",
        "teamId": 3
      },
      {
        "firstName": "Maggie",
        "lastName": "Walker",
        "username": "mwalker",
        "teamId": 2
      }
    ];
    this.teams = [
      {
        "id": 1,
        "name": "JMU"
      },
      {
        "id": 2,
        "name": "University of Richmond"
      },
      {
        "id": 3,
        "name": "UVA"
      }
    ]

  }

  ngOnInit() {
  }

}

class Players {
  "firstName": string;
  "lastName": string;
  "username": string;
  "teamId": number;
}
class Teams {
  "id": number;
  "name": string;
}