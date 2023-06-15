import { Component, Input, OnInit } from '@angular/core';

import { LazyLoadEvent } from 'primeng/api';

import { MovieListModel } from 'src/app/models/movie-list.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  @Input() showOnlyWinners: boolean = false;

  movies?: MovieListModel = new MovieListModel();
  yearFilter: number | null = null;
  winnerFilter?: boolean | null = null;
  winnerOptions = [
    { label: 'All', value: null },
    { label: 'Yes', value: true },
    { label: 'No', value: false }
  ];
  defaultNumbersOfRows = 15;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    if (this.showOnlyWinners) {
      this.defaultNumbersOfRows = 5;
      this.winnerFilter = true;
    }
    this.getData();
  }

  /**
   * Get the list of movies to populate the table
   * @param tableEvent 
   */
  async getData(tableEvent?: LazyLoadEvent) {
    // if no paging parameters where sent, it will call for the first page
    let pageNumber = 0;
    let rows = this.defaultNumbersOfRows
    if (tableEvent) {
      const first = tableEvent.first ?? 0;
      const rows = tableEvent.rows ?? this.defaultNumbersOfRows;
      pageNumber = this.calculatePageNumber(first, rows);
    }

    // get movies from the API
    this.movies = await this.apiService.getMovies(pageNumber, rows, this.yearFilter, this.winnerFilter);
  }

  /**
   * calculate the number of the page based on the first element divided by the number of elements per page
   * @returns number
   */
  calculatePageNumber(first: number, rows: number): number {
    const page = Math.floor(first / (rows ?? 1));
    return isNaN(page) ? 0 : page;
  }

}
