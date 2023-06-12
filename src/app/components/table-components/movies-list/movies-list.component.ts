import { Component, OnInit } from '@angular/core';
import { MovieListModel } from 'src/app/models/movie-list.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  movies?: MovieListModel = new MovieListModel();
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

  async getMovies(tableEvent?: any) {
    // if no paging parameters where sent, it will call for the first page
    let pageNumber = 0;
    if (tableEvent) {
      pageNumber = this.calculatePageNumber(tableEvent?.first, tableEvent?.rows);
    }

    // get movies from the API
    this.movies = await this.apiService.getMovies(pageNumber, this.yearFilter, this.winnerFilter);
  }

  /**
   * calculate the number of the page based on the first element divided by the number of elements per page
   * @returns number
   */
  calculatePageNumber(first: number, rows: number): number {
    return Math.floor(first / (rows ?? 1));
  }

}
