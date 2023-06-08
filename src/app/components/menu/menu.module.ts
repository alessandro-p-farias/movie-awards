import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  exports: [
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule
  ],
  providers: [],
})
export class MenuModule { }
