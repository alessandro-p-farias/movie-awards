import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

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
    BrowserAnimationsModule,
    FormsModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    DropdownModule
  ],
  providers: [],
})
export class MoviesListModule { }
