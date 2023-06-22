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

  /**
   * Get a list of all movies
   * @param pageNumber number 
   * @param rows number 
   * @param year number | null
   * @param winner boolean | null
   * @returns Promise<MovieListModel>
   */
  async getMovies(pageNumber: number, rows: number, year?: number | null, winner?: boolean | null): Promise<MovieListModel> {
    const pagingParameters = `?page=${pageNumber}&size=${rows}`;
    const queryParameters = this.defineQueryParameters(year, winner);
    return lastValueFrom(this.httpClient.get(`${this.API_URL}${pagingParameters}${queryParameters}`));
  }

  defineQueryParameters(year?: number | null, winner?: boolean | null): string {
    let queryParams = "";
    queryParams += year ? `&year=${year}` : '';
    queryParams += winner != null ? `&winner=${winner}` : '';

    return queryParams;
  }

  /**
   * Get the top three studio with more winners in decrescent order
   * @returns Promise<TopThreeModel>
   */
  async getTopThree(): Promise<TopThreeModel> {
    const queryParam = '?projection=studios-with-win-count';
    return lastValueFrom(this.httpClient.get<TopThreeModel>(`${this.API_URL}${queryParam}`));
  }

  /**
   * Get the ranking of the years with multiple winners in decrescent order
   * @returns Promise<WinningYearRankingModel>
   */
  async getWinningYearsRanking(): Promise<WinningYearRankingModel> {
    const queryParam = '?projection=years-with-multiple-winners';
    return lastValueFrom(this.httpClient.get<WinningYearRankingModel>(`${this.API_URL}${queryParam}`));
  }

  /**
   * Get the producer with the greather interval between wins, and the one with lesser interval between wins
   * @returns Promise<ProducerWinnnigIntervalModel>
   */
  async getProducersWinningInterval(): Promise<ProducerWinnnigIntervalModel> {
    const queryParam = '?projection=max-min-win-interval-for-producers';
    return lastValueFrom(this.httpClient.get<ProducerWinnnigIntervalModel>(`${this.API_URL}${queryParam}`));
  }
}
