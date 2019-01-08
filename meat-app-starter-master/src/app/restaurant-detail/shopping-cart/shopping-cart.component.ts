import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shoppint-cart.service';

@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private shoppintCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items():any[]
  {
    return this.shoppintCartService.items;
  }

  total(): number {
    return this.shoppintCartService.total();
  }

  clear()
  {
    this.shoppintCartService.clear();
  }

  removeItem(item : any)
  {
    this.shoppintCartService.removeItem(item);
  }

  addItem(item : any)
  {
    this.shoppintCartService.addItem(item);
  }

}
