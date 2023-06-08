import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { MoviesListModule } from '../table-components/movies-list/movies-list.module';

@NgModule({
  declarations: [
    ListComponent,
  ],
  imports: [
    BrowserModule,
    MoviesListModule
  ],
  providers: [],
})
export class ListModule { }
