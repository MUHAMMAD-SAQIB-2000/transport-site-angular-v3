import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Route } from '../../interfaces/Route';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    this.usersUrl = 'http://localhost:8080/routes/all';
  }

  public findAll(): Observable<Route[]> {
    return this.http.get<Route[]>(this.usersUrl);
  }
}
