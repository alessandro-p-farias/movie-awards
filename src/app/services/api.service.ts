import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'https://tools.texoit.com/backend-java/api/movies';

  constructor(
    private httpClient: HttpClient
  ) { }

  async getMovies(year?: number | null, winner?: boolean | null): Promise<any> {
    let queryParams = '';
    queryParams += year ? `?year=${year}` : '';
    queryParams += winner ? `?year=${year}` : '';
    return lastValueFrom(this.httpClient.get(this.apiUrl + queryParams));
  }

}
