import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransportComponent } from './modules/transport/transport.component';
import { HomeComponent } from './modules/transport/home/home.component';
import { ContactComponent } from './modules/transport/contact/contact.component';
import { AboutComponent } from './modules/transport/about/about.component';
import { RoutesComponent } from './modules/transport/routes/routes.component';
// import { TransportComponent } from './modules/transport/transport.component';
// import { HomeComponent } from './modules/transport/home/home.component';
// import { ContactComponent } from './modules/transport/contact/contact.component';
// import { AboutusComponent } from './modules/transport/aboutus/aboutus.component';
// import { RouteComponent } from './modules/transport/route/route.component';
// import { RoutestopComponent } from './modules/transport/routestop/routestop.component';
// import { StudentResponseComponent } from './modules/transport/home/student-response/student-response.component';
// import { OurStaffComponent } from './modules/transport/home/our-staff/our-staff.component';
// import { RouteplanComponent } from './modules/transport/route/routeplan/routeplan.component';
// import { GoogleMapComponent } from './modules/transport/contact/google-map/google-map.component';
// import { LatestNewsComponent } from './modules/transport/home/latest-news/latest-news.component';
// import { CounterComponent } from './modules/transport/home/counter/counter.component';
// import { ContactformComponent } from './modules/transport/contact/contactform/contactform.component';
// import { TransportdirectormessageComponent } from './modules/transport/aboutus/transportdirectormessage/transportdirectormessage.component';
// import { VcmessageComponent } from './modules/transport/home/vcmessage/vcmessage.component';
// import { TransportrepairserviceComponent } from './modules/transport/aboutus/transportrepairservice/transportrepairservice.component';
// import { TransportgalleryComponent } from './modules/transport/aboutus/transportgallery/transportgallery.component';
// import { BusesprovidedComponent } from './modules/transport/aboutus/busesprovided/busesprovided.component';

@NgModule({
  declarations: [
    AppComponent,
    TransportComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    RoutesComponent,
    // TransportComponent,
    // HomeComponent,
    // ContactComponent,
    // AboutusComponent,
    // RouteComponent,
    // RoutestopComponent,
    // StudentResponseComponent,
    // OurStaffComponent,
    // RouteplanComponent,
    // GoogleMapComponent,
    // LatestNewsComponent,
    // CounterComponent,
    // ContactformComponent,
    // TransportdirectormessageComponent,
    // VcmessageComponent,
    // TransportrepairserviceComponent,
    // TransportgalleryComponent,
    // BusesprovidedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
