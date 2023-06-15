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
    this.defaultNumbersOfRows = this.showOnlyWinners ? 5 : this.defaultNumbersOfRows;
    this.winnerFilter = this.showOnlyWinners ? true : null;
    this.getData();
  }

  /**
   * Get the list of movies to populate the table
   * @param tableEvent LazyLoadEvent
   */
  async getData(tableEvent?: LazyLoadEvent) {
    let rows = tableEvent?.rows ?? this.defaultNumbersOfRows;
    const pageNumber = this.getPageNumber(tableEvent);

    // get movies from the API
    this.movies = await this.apiService.getMovies(pageNumber, rows, this.yearFilter, this.winnerFilter);
  }

  /**
   * Get the page number based on the parameters sent or the first page if no parameter where sent
   * @param tableEvent LazyLoadEvent
   * @returns 
   */
  getPageNumber(tableEvent?: LazyLoadEvent): number {
    // if no paging parameters where sent, it will call for the first page
    let pageNumber = 0;
    const first = tableEvent?.first ?? 0;
    const rows = tableEvent?.rows ?? this.defaultNumbersOfRows;
    pageNumber = this.calculatePageNumber(first, rows);

    return pageNumber;
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
