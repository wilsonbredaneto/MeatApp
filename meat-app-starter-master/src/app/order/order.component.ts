import { Component, OnInit } from '@angular/core';
import { RadioOption } from 'app/shared/radio/radio-option.model';
import { OrderService } from './order.service';
import { CartItem } from 'app/restaurant-detail/shopping-cart/cart-item.model';

@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  delivery: number = 8;

  paymentOptions: RadioOption[]=[
    {label: "Dinheiro", value: "MON"},
    {label: "Cartão de Débito", value: "DEB"},
    {label: "Cartão Refeição", value: "REF"}
  ];


  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue() : number{
    return this.orderService.itemsValue();
  }

  cartItems() : CartItem[]
  {
    return this.orderService.cartItems();
  }

  increaseQty(item: CartItem)
  {
    this.orderService.increasyQty(item);
  }

  decreaseQty(item: CartItem)
  {
    this.orderService.decreasyQty(item);
  }

  remove(item: CartItem)
  {
    this.orderService.remove(item);
  }
}
