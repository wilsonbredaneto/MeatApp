import { Component, OnInit } from '@angular/core';
import { RestaurantService } from "app/restaurants/restaurants.service";
import { Restaurant } from "app/restaurants/restaurant/restaurant.model";
import { ActivatedRoute } from "@angular/router";


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  restaurant: Restaurant;
  constructor(private restaurantsService: RestaurantService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.restaurantsService.restaurantsById(this.route.snapshot.params['id'])
    .subscribe(res => this.restaurant = res);
  }

}
