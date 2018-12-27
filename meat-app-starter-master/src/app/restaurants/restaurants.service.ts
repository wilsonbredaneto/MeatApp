import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Restaurant} from './restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "app/app.error-handler";

@Injectable()
export class RestaurantService
{
  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]>{

    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
