import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { TableModule } from 'primeng/table';

import { TopThreeComponent } from './top-three.component';

@NgModule({
  declarations: [
    TopThreeComponent,
  ],
  exports: [
    TopThreeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TableModule
  ],
  providers: [],
})
export class TopThreeModule { }
