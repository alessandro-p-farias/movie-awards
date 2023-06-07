import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    ButtonModule
  ],
  providers: [],
})
export class HomeModule { }
