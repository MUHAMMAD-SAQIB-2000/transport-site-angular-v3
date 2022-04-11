import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TransportComponent } from './modules/transport/transport.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RoutesComponent } from './routes/routes.component';
import { NewsComponent } from './home/news/news.component';
import { CounterComponent } from './home/counter/counter.component';
import { RouteplanComponent } from './routes/routeplan/routeplan.component';
import { ContactformComponent } from './contact/contactform/contactform.component';
import { BusesprovidedComponent } from './about/busesprovided/busesprovided.component';
import { TransportdirectormessageComponent } from './about/transportdirectormessage/transportdirectormessage.component';
import { TransportgalleryComponent } from './about/transportgallery/transportgallery.component';
import { TransportrepairserviceComponent } from './about/transportrepairservice/transportrepairservice.component';
import { VcmessageComponent } from './home/vcmessage/vcmessage.component';
import { StudentResponseComponent } from './home/student-response/student-response.component';
import { OurStaffComponent } from './home/our-staff/our-staff.component';
import { AbouttransportComponent } from './about/abouttransport/abouttransport.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BreadcrumbsComponent } from './breadcrumb/breadcrumbs.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { SliderComponent } from './home/slider/slider.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MainSectionComponent } from './home/main-section/main-section.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchfilterPipe } from './routes/routeplan/searchfilter.pipe';


@NgModule({
  declarations: [
    SearchfilterPipe,
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
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    AboutusComponent,
    SliderComponent,
    NavbarComponent,
    MainSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
