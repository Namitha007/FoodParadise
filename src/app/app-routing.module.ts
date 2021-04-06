import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { BeveragesComponent } from './beverages/beverages.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DinnerComponent } from './dinner/dinner.component';
import { FastfoodComponent } from './fastfood/fastfood.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationDialogComponent } from './reservation-dialog/reservation-dialog.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ThankyouComponent } from './thankyou/thankyou.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: AboutComponent
  },
  {
    path: 'menu', component: MenuComponent
  },
  {
    path: 'desserts', component: DessertsComponent
  },
  {
    path: 'beverages', component: BeveragesComponent
  },
  {
    path: 'fastfood', component: FastfoodComponent
  },
  {
    path: 'dinner', component: DinnerComponent
  },
  {
    path: 'contactus', component: ContactusComponent
  },
  {
    path: 'reservation', component: ReservationComponent 
  },
  {
    path: 'thankyou', component: ThankyouComponent
  },
  {
    path: 'reservation-dialog', component: ReservationDialogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
