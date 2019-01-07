import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Restaurant} from './restaurant/restaurant.model'
import {MEAT_API} from '../app.api'
import { Observable } from "rxjs/observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import { ErrorHandler } from "app/app.error-handler";
import { MenuItem } from 'app/restaurant-detail/menu-item/menu-item.model';

@Injectable()
export class RestaurantService
{
  constructor(private http: Http){}

  restaurants(): Observable<Restaurant[]>{

    return this.http.get(`${MEAT_API}/restaurants`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  restaurantsById(id: string): Observable<Restaurant>
  {
    return this.http.get(`${MEAT_API}/restaurants/${id}`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  reviewsOfRestaurant(id : string): Observable<any>{
    return this.http.get(`${MEAT_API}/restarants/${id}/reviews`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

  menuOfRestaurant(id : string): Observable<MenuItem[]>{
    return this.http.get(`${MEAT_API}/restarants/${id}/menu`)
    .map(response => response.json())
    .catch(ErrorHandler.handleError)
  }

}
