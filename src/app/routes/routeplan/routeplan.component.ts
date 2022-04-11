import { Component, OnInit } from '@angular/core';
import routeplan from '../../data/routes.json';
import { Route } from 'src/app/interfaces/Route';
import { RouteService } from './route.service';

@Component({
  selector: 'app-routeplan',
  templateUrl: './routeplan.component.html',
  styleUrls: ['./routeplan.component.css']
})
export class RouteplanComponent implements OnInit {

  routes:Route[] = [];
  RouteService: any;

  searchValue:string = "";

  constructor() {
    console.log(this.routes);
  }

  ngOnInit(): void {
    // this.RouteService.findAll().subscribe((data: Route[]) => {
    // this.routes = data;
    // });

    this.routes = routeplan;
    console.log(this.routes);
  }

}
