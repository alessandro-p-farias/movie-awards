import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from 'primeng/card';

import { DashboardComponent } from './dashboard.component';
import { ProducersWinningIntervalModule } from '../table-components/producers-winning-interval/producers-winning-interval.module';
import { WinningYearsRankingModule } from '../table-components/winning-years-ranking/winning-years-ranking.module';
import { TopThreeModule } from '../table-components/top-three/top-three.module';
import { MoviesListModule } from '../table-components/movies-list/movies-list.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,

    ProducersWinningIntervalModule,
    WinningYearsRankingModule,
    TopThreeModule,
    MoviesListModule
  ],
  providers: [],
})
export class DashboardModule { }
