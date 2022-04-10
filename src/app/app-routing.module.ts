import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransportComponent } from './modules/transport/transport.component';
import { ContactComponent } from './modules/transport/contact/contact.component';
import { AboutComponent } from './modules/transport/about/about.component';
import { RoutesComponent } from './modules/transport/routes/routes.component';
import { HomeComponent } from './modules/transport/home/home.component';

const routes: Routes = [
  { path: '/', component: HomeComponent },
  { path: '/home', component: HomeComponent },
  { path: '/contact', component: ContactComponent },
  { path: '/about', component: AboutComponent },
  { path: '/routes', component: RoutesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];


@NgModule({
  declarations: [],
  // imports: [ RouterModule.forRoot(routes) ],
  // exports: [ RouterModule ]
})
export class AppRoutingModule { }
