import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransportComponent } from './modules/transport/transport.component';
import { HomeComponent } from './modules/transport/home/home.component';
import { ContactComponent } from './modules/transport/contact/contact.component';
import { AboutComponent } from './modules/transport/about/about.component';
import { RoutesComponent } from './modules/transport/routes/routes.component';
import { NewsComponent } from './modules/transport/home/news/news.component';
import { CounterComponent } from './modules/transport/home/counter/counter.component';
import { RouteplanComponent } from './modules/transport/routes/routeplan/routeplan.component';
import { ContactformComponent } from './modules/transport/contact/contactform/contactform.component';
import { BusesprovidedComponent } from './modules/transport/about/busesprovided/busesprovided.component';
import { TransportdirectormessageComponent } from './modules/transport/about/transportdirectormessage/transportdirectormessage.component';
import { TransportgalleryComponent } from './modules/transport/about/transportgallery/transportgallery.component';
import { TransportrepairserviceComponent } from './modules/transport/about/transportrepairservice/transportrepairservice.component';
import { VcmessageComponent } from './modules/transport/home/vcmessage/vcmessage.component';
import { StudentResponseComponent } from './modules/transport/home/student-response/student-response.component';
import { OurStaffComponent } from './modules/transport/home/our-staff/our-staff.component';
import { AbouttransportComponent } from './modules/transport/about/abouttransport/abouttransport.component';

@NgModule({
  declarations: [
    AppComponent,
    TransportComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RoutesComponent,
    NewsComponent,
    CounterComponent,
    RouteplanComponent,
    ContactformComponent,
    BusesprovidedComponent,
    TransportdirectormessageComponent,
    TransportgalleryComponent,
    TransportrepairserviceComponent,
    VcmessageComponent,
    StudentResponseComponent,
    OurStaffComponent,
    AbouttransportComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
