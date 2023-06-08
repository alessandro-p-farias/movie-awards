import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CardModule } from 'primeng/card';

import { DashboardComponent } from './dashboard.component';
import { ProducersWinningIntervalModule } from '../table-components/producers-winning-interval/producers-winning-interval.module';
import { WinnersByYearModule } from '../table-components/winners-by-year/winners-by-year.module';
import { WinningYearsRankingModule } from '../table-components/winning-years-ranking/winning-years-ranking.module';
import { TopThreeModule } from '../table-components/top-three/top-three.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    CardModule,

    ProducersWinningIntervalModule,
    WinnersByYearModule,
    WinningYearsRankingModule,
    TopThreeModule
  ],
  providers: [],
})
export class DashboardModule { }
