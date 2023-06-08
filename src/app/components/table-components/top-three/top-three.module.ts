import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    TableModule
  ],
  providers: [],
})
export class TopThreeModule { }
