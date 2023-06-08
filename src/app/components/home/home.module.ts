import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { DashboardModule } from '../dashboard/dashboard.module';
import { MenuModule } from '../menu/menu.module';
import { ListModule } from '../list/list.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,

    MenuModule,
    DashboardModule,
    ListModule,
  ],
  providers: [],
})
export class HomeModule { }
