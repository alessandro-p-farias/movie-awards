import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { HttpClient } from "@angular/common/http";

import { ApiService } from "./api.service";
import { MovieListModel } from "../models/movie-list.model";
import { TopThreeModel } from "../models/top-three.model";
import { MovieModel } from "../models/movie.model";
import { WinningYearRankingModel } from "../models/winning-year-ranking.model";
import { ProducerWinnnigIntervalModel } from "../models/producer-winning-interval";

describe('ApiService', () => {
  let apiService: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ApiService,
      ],
    }).compileComponents();

    apiService = TestBed.inject(ApiService);
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should correctly define the query parameters', () => {
    let queryParameters = apiService.defineQueryParameters();
    expect(queryParameters).toBe("");

    queryParameters = apiService.defineQueryParameters(1998);
    expect(queryParameters).toContain("&year=");
    expect(queryParameters).not.toContain("&winner=");

    queryParameters = apiService.defineQueryParameters(1889, false);
    expect(queryParameters).toContain("&year=");
    expect(queryParameters).toContain("&winner=");

    queryParameters = apiService.defineQueryParameters(null, true);
    expect(queryParameters).not.toContain("&year=");
    expect(queryParameters).toContain("&winner=");
  });

  it('should call api only with get method', () => {
    const url = `${apiService.API_URL}/movies`;
    httpClient.get(url).subscribe();
    const request = httpTestingController.expectOne(url);
    expect(request.request.method).toBe('GET');
  });

  it('should handle a error', (done: DoneFn) => {
    const url = `${apiService.API_URL}/movies`;
    httpClient.get<MovieListModel>(url).subscribe({
      next: (data) => {
        expect(data).toBeUndefined();
        done();
      },
      error: (error) => {
        expect(error.status).toEqual(400);
        done();
      }
    });
    const request = httpTestingController.expectOne(url);
    request.flush('', { status: 400, statusText: 'Bad Request' });
  });

  describe('getMovies()', () => {
    it('should return a movie list when called', (done: DoneFn) => {
      const url = `${apiService.API_URL}/movies?page=1&size=50`;
      const movieList = new MovieListModel;
      httpClient.get<MovieListModel>(url).subscribe({
        next: (data) => {
          expect(data).toBeInstanceOf(MovieListModel);
          done();
        }
      });
      const request = httpTestingController.expectOne(url);
      request.flush(movieList);
    });
  });

  describe('getWinnersByYear()', () => {
    it('should get winners list when called', (done: DoneFn) => {
      const url = `${apiService.API_URL}/movies?winner=true`;
      const movie = new MovieModel;
      httpClient.get<MovieModel>(url).subscribe({
        next: (data) => {
          expect(data).toBeInstanceOf(MovieModel);
          done();
        }
      });
      const request = httpTestingController.expectOne(url);
      request.flush(movie);
    });
  });

  describe('getTopThree()', () => {
    it('should get the top three studios list when called', (done: DoneFn) => {
      const url = `${apiService.API_URL}/movies?projection=studios-with-win-count`;
      const topThree = new TopThreeModel;
      httpClient.get<TopThreeModel>(url).subscribe({
        next: (data) => {
          expect(data).toBeInstanceOf(TopThreeModel);
          done();
        }
      });
      const request = httpTestingController.expectOne(url);
      request.flush(topThree);
    });
  });

  describe('getWinningYearRanking()', () => {
    it('should get winning years ranking when called', (done: DoneFn) => {
      const url = `${apiService.API_URL}/movies?projection=years-with-mulple-winners`;
      const ranking = new WinningYearRankingModel;
      httpClient.get<WinningYearRankingModel>(url).subscribe({
        next: (data) => {
          expect(data).toBeInstanceOf(WinningYearRankingModel);
          done();
        }
      });
      const request = httpTestingController.expectOne(url);
      request.flush(ranking);
    });
  });

  describe('getProducersWinningInterval()', () => {
    it('should get producers winning interval when called', (done: DoneFn) => {
      const url = `${apiService.API_URL}/movies?projection=max-min-win-interval-for-producers`;
      const interval = new ProducerWinnnigIntervalModel;
      httpClient.get<ProducerWinnnigIntervalModel>(url).subscribe({
        next: (data) => {
          expect(data).toBeInstanceOf(ProducerWinnnigIntervalModel);
          done();
        }
      });
      const request = httpTestingController.expectOne(url);
      request.flush(interval);
    });
  });
});
