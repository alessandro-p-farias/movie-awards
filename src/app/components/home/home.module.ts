import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from '../menu/menu.component';
import { WinnersByYearComponent } from '../table-components/winners-by-year/winners-by-year.component';
import { TopThreeComponent } from '../table-components/top-three/top-three.component';
import { WinningYearsRankingComponent } from '../table-components/winning-years-ranking/winning-years-ranking.component';
import { ProducersWinningIntervalComponent } from '../table-components/producers-winning-interval/producers-winning-interval.component';
import { MoviesListComponent } from '../table-components/movies-list/movies-list.component';
import { ListComponent } from '../list/list.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,

    ListComponent,
    DashboardComponent,

    WinnersByYearComponent,
    TopThreeComponent,
    WinningYearsRankingComponent,
    ProducersWinningIntervalComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HomeRoutingModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    CardModule
  ],
  providers: [],
})
export class HomeModule { }
