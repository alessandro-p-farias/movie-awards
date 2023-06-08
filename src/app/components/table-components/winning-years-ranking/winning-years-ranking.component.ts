import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winning-years-ranking',
  templateUrl: './winning-years-ranking.component.html',
  styleUrls: ['./winning-years-ranking.component.scss']
})
export class WinningYearsRankingComponent implements OnInit {

  ranking = {
    'years': [
      {
        'year': 9999,
        'winnerCount': 99
      },
      {
        'year': 9999,
        'winnerCount': 99
      }
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
