import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MenuComponent } from '../menu/menu.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule
  ],
  providers: [],
})
export class HomeModule { }
