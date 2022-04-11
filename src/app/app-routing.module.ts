import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TransportComponent } from './modules/transport/transport.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoutesComponent } from './routes/routes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
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
