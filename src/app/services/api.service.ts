import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { MovieListModel } from '../models/movie-list.model';
import { lastValueFrom } from 'rxjs';
import { TopThreeModel } from '../models/top-three.model';
import { MovieModel } from '../models/movie.model';
import { WinningYearRankingModel } from '../models/winning-year-ranking.model';
import { ProducerWinnnigIntervalModel } from '../models/producer-winning-interval';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_URL = 'https://tools.texoit.com/backend-java/api/movies';

  constructor(
    private httpClient: HttpClient
  ) { }

  async getMovies(year?: number | null, winner?: boolean | null): Promise<MovieListModel> {
    let queryParams = '?page=1&size=50';
    queryParams += year ? `&year=${year}` : '';
    queryParams += winner ? `&winner=${winner}` : '';
    return lastValueFrom(this.httpClient.get(`${this.API_URL}${queryParams}`));
  }

  async getWinnersByYear(year?: number | null): Promise<MovieModel> {
    let queryParams = '';
    queryParams += year ? `&year=${year}` : '';
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?winner=true`));
  }

  async getTopThree(): Promise<TopThreeModel> {
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?projection=studios-with-win-count`));
  }

  async getWinningYearsRanking(): Promise<WinningYearRankingModel> {
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?projection=years-with-mulple-winners`));
  }

  async getProducersWinningInterval(): Promise<ProducerWinnnigIntervalModel> {
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?projection=max-min-win-interval-for-producers`));
  }
}
