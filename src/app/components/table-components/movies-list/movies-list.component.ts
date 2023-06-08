import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies = [];
  yearFilter = null;
  winnerFilter = null;
  winnerOptions = [
    { label: 'All', value: null },
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getMovies();
  }

  async getMovies() {
    this.movies = await this.apiService.getMovies(this.yearFilter, this.winnerFilter);
  }

}
