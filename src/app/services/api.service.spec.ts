import { ApiService } from "./api.service";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { HttpClientTestingModule, HttpTestingController } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { MovieListModel } from "../models/movie-list.model";
import { TopThreeModel } from "../models/top-three.model";
import { MovieModel } from "../models/movie.model";
import { WinningYearRankingModel } from "../models/winning-year-ranking.model";
import { ProducerWinnnigIntervalModel } from "../models/producer-winning-interval";

describe('ApiService', () => {
  let apiService: ApiService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
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

  it('should call api only with get method', () => {
    const url = `${apiService.API_URL}/movies`;
    httpClient.get(url).subscribe();
    const request = httpTestingController.expectOne(url);
    expect(request.request.method).toBe('GET');
  });

  describe('getMovies()', () => {
    it('should return a movie list when called', (done: DoneFn) => {
      const url = `${apiService.API_URL}/movies?page=1&size=50`;
      const movieList = new MovieListModel;
      httpClient.get<MovieListModel>(url).subscribe(data => {
        expect(data).toBeInstanceOf(MovieListModel);
        done();
      });
      const request = httpTestingController.expectOne(url);
      request.flush(movieList);
    });

    it('should get movie list when called', (done: DoneFn) => {
      const httpClientSpy = jasmine.createSpyObj('getMovies', ['get']);
      const service = new ApiService(httpClientSpy);
      httpClientSpy.get.and.returnValue(of(new MovieListModel));
      service.getMovies()
        .then(data => {
          expect(data).toBeInstanceOf(MovieListModel);
          done();
        })
        .catch(() => { done.fail });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getWinnersByYear()', () => {
    it('should get winners list when called', (done: DoneFn) => {
      const httpClientSpy = jasmine.createSpyObj('getWinnerByYear', ['get']);
      const service = new ApiService(httpClientSpy);
      httpClientSpy.get.and.returnValue(of(new MovieModel));
      service.getWinnersByYear()
        .then(data => {
          expect(data).toBeInstanceOf(MovieModel);
          done();
        })
        .catch(() => { done.fail });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getTopThree()', () => {
    it('should get the top three studios list when called', (done: DoneFn) => {
      const httpClientSpy = jasmine.createSpyObj('getTopThree', ['get']);
      const service = new ApiService(httpClientSpy);
      httpClientSpy.get.and.returnValue(of(new TopThreeModel));
      service.getTopThree()
        .then(data => {
          expect(data).toBeInstanceOf(TopThreeModel);
          done();
        })
        .catch(() => { done.fail });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getWinningYearRanking()', () => {
    it('should get winning years ranking when called', (done: DoneFn) => {
      const httpClientSpy = jasmine.createSpyObj('getWinningYearsRanking', ['get']);
      const service = new ApiService(httpClientSpy);
      httpClientSpy.get.and.returnValue(of(new WinningYearRankingModel));
      service.getWinningYearsRanking()
        .then(data => {
          expect(data).toBeInstanceOf(WinningYearRankingModel);
          done();
        })
        .catch(() => { done.fail });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });

  describe('getWinningYearRanking()', () => {
    it('should get producers winning interval when called', (done: DoneFn) => {
      const httpClientSpy = jasmine.createSpyObj('getProducersWinningInterval', ['get']);
      const service = new ApiService(httpClientSpy);
      httpClientSpy.get.and.returnValue(of(new ProducerWinnnigIntervalModel));
      service.getProducersWinningInterval()
        .then(data => {
          expect(data).toBeInstanceOf(ProducerWinnnigIntervalModel);
          done();
        })
        .catch(() => { done.fail });
      expect(httpClientSpy.get).toHaveBeenCalledTimes(1);
    });
  });
});
