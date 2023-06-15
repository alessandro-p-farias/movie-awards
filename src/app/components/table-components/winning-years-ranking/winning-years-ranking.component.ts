import { Component, OnInit } from '@angular/core';

import { WinningYearRankingModel } from 'src/app/models/winning-year-ranking.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-winning-years-ranking',
  templateUrl: './winning-years-ranking.component.html',
  styleUrls: ['./winning-years-ranking.component.scss']
})
export class WinningYearsRankingComponent implements OnInit {

  ranking: WinningYearRankingModel = new WinningYearRankingModel();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Get the the list of wins by year, ordered by the year with most wins
   */
  async getData() {
    this.ranking = await this.apiService.getWinningYearsRanking();
  }

}
