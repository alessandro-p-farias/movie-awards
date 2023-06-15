import { Component, OnInit } from '@angular/core';

import { ProducerWinnnigIntervalModel } from 'src/app/models/producer-winning-interval';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-producers-winning-interval',
  templateUrl: './producers-winning-interval.component.html',
  styleUrls: ['./producers-winning-interval.component.scss']
})
export class ProducersWinningIntervalComponent implements OnInit {

  intervals?: ProducerWinnnigIntervalModel = new ProducerWinnnigIntervalModel();

  constructor(  
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Get the producers winning interval from api
   */
  async getData() {
    this.intervals = await this.apiService.getProducersWinningInterval();
  }
}
