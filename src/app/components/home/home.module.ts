import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ButtonModule } from 'primeng/button';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { DashboardModule } from '../dashboard/dashboard.module';
import { ListModule } from '../list/list.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HomeRoutingModule,

    DashboardModule,
    ListModule,

    ButtonModule
  ],
  providers: [],
})
export class HomeModule { }
