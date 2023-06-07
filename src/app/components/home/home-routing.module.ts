import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: HomeComponent,
    children: routes
  }])
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
