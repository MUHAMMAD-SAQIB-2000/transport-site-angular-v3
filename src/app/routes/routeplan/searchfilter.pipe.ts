import { Pipe, PipeTransform } from '@angular/core';
import { Route } from '../../interfaces/Route';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform {

  transform(routes: Route[], searchValue: string): Route[] {
    if (!routes || !searchValue) {
      return routes;
    }
    return routes.filter(route =>
    (route.CITY.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
      (route.STARTING_POINT.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        route.STATUS.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        route.REGISTRATION_NUMBER.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        route.DRIVER_NAME.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase()) ||
        route.STOPS.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())))
    );
  }
}
