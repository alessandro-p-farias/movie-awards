import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies = [
    {
      'id': 999,
      'year': 1900,
      'title': 'Movie Title',
      'studios': ['Studio Name'],
      'producers': ['Producer Name'],
      'winner': true
    },
    {
      'id': 999,
      'year': 1900,
      'title': 'Movie Title',
      'studios': ['Studio Name', 'Studio Name'],
      'producers': ['Producer Name'],
      'winner': false
    }

  ];
  yearFilter = '';
  winnerFilter = '';

  constructor() { }

  ngOnInit(): void {
  }

}
