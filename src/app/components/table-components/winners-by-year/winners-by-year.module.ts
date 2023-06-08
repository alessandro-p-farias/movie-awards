import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

import { WinnersByYearComponent } from './winners-by-year.component';

@NgModule({
  declarations: [
    WinnersByYearComponent,
  ],
  exports: [
    WinnersByYearComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule,
    InputTextModule,
    ButtonModule
  ],
  providers: [],
})
export class WinnersByYearModule { }
