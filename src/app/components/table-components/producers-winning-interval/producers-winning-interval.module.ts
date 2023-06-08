import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { TableModule } from 'primeng/table';

import { ProducersWinningIntervalComponent } from './producers-winning-interval.component';

@NgModule({
  declarations: [
    ProducersWinningIntervalComponent,
  ],
  exports: [
    ProducersWinningIntervalComponent,
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
})
export class ProducersWinningIntervalModule { }
