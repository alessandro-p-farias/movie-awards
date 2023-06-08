import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producers-winning-interval',
  templateUrl: './producers-winning-interval.component.html',
  styleUrls: ['./producers-winning-interval.component.scss']
})
export class ProducersWinningIntervalComponent implements OnInit {

  intervals = {
    "min": [
      {
        "producer": "Producer Name",
        "interval": 9,
        "previousWin": 2018,
        "followingWin": 2019
      }
    ],
    "max": [
      {
        "producer": "Producer Name",
        "interval": 99,
        "previousWin": 1900,
        "followingWin": 1999
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
