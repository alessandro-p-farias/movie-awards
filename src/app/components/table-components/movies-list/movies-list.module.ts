import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

import { MoviesListComponent } from './movies-list.component';

@NgModule({
  declarations: [
    MoviesListComponent,
  ],
  exports: [
    MoviesListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule
  ],
  providers: [],
})
export class MoviesListModule { }
