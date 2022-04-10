import { Component, OnInit } from '@angular/core';
import routeplan from '../../../../data/routes.json';
import { Route } from 'src/app/interfaces/Route';

@Component({
  selector: 'app-routeplan',
  templateUrl: './routeplan.component.html',
  styleUrls: ['./routeplan.component.css']
})
export class RouteplanComponent implements OnInit {

  routes:Route[] | undefined;
  constructor() {
    console.log(this.routes);
  }

  ngOnInit(): void {
    this.routes = routeplan;
  }

}
