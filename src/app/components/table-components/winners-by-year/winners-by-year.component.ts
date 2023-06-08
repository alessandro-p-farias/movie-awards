import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-winners-by-year',
  templateUrl: './winners-by-year.component.html',
  styleUrls: ['./winners-by-year.component.scss']
})
export class WinnersByYearComponent implements OnInit {

  winners = [
    {
      'id': 99,
      'year': 1990,
      'title': 'Movie Title',
      'studios': ['Studio Name'],
      'producers': [' Producer Name '],
      'winner': true
    }
  ];
  yearFilter = '';

  constructor() { }

  ngOnInit(): void {
  }

}
