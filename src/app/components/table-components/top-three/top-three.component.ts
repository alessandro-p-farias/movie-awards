import { Component, OnInit } from '@angular/core';

import { StudioObject, TopThreeModel } from 'src/app/models/top-three.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-top-three',
  templateUrl: './top-three.component.html',
  styleUrls: ['./top-three.component.scss']
})
export class TopThreeComponent implements OnInit {

  topThree: TopThreeModel = new TopThreeModel();

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.getData();
  }

  /**
   * Get the array of all winning movies in decrescent order
   */
  async getData() {
    const data = await this.apiService.getTopThree();
    this.topThree.studios = this.getTopThree(data?.studios);
  }

  /**
   * Retuns only the three first elements of the array passed as parameter
   * @param data Array<TopThreeModel>
   * @returns Array<TopThreeModel>
   */
  getTopThree(data?: Array<StudioObject>): Array<StudioObject> {
    // if the array contains less than three elements, it return all elements
    if (!data) {
      return [];
    }
    const end = (data?.length < 3) ? data?.length : 3;
    return data.slice(0, end);
  }
}
