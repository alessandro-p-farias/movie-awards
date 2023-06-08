import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { WinningYearsRankingComponent } from './winning-years-ranking.component';

@NgModule({
  declarations: [
    WinningYearsRankingComponent
  ],
  exports: [
    WinningYearsRankingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule
  ],
  providers: [],
})
export class WinningYearsRankingModule { }
