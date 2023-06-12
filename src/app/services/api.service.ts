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
   * @param year number
   * @param winner boolean 
   * @returns Promise<MovieListModel>
   */
  async getMovies(pageNumber: number, year?: number | null, winner?: boolean | null): Promise<MovieListModel> {
    let queryParams = `?page=${pageNumber}&size=10`;
    queryParams += year ? `&year=${year}` : '';
    queryParams += winner ? `&winner=${winner}` : '';
    return lastValueFrom(this.httpClient.get(`${this.API_URL}${queryParams}`));
  }

  /**
   * Get winning movies by year
   * @param year number
   * @returns Promise<MovieModel>
   */
  async getWinnersByYear(year?: number | null): Promise<MovieModel> {
    let queryParams = '';
    queryParams += year ? `&year=${year}` : '';
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?winner=true`));
  }

  /**
   * Get the top three studio with more winners in decrescent order
   * @returns Promise<TopThreeModel>
   */
  async getTopThree(): Promise<TopThreeModel> {
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?projection=studios-with-win-count`));
  }

  /**
   * Get the ranking of the years with multiple winners in decrescent order
   * @returns Promise<WinningYearRankingModel>
   */
  async getWinningYearsRanking(): Promise<WinningYearRankingModel> {
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?projection=years-with-mulple-winners`));
  }

  /**
   * Get the producer with the greather interval between wins, and the one with lesser interval between wins
   * @returns Promise<ProducerWinnnigIntervalModel>
   */
  async getProducersWinningInterval(): Promise<ProducerWinnnigIntervalModel> {
    return lastValueFrom(this.httpClient.get(`${this.API_URL}?projection=max-min-win-interval-for-producers`));
  }
}
