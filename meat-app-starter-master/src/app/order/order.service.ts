import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shoppint-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService)
    {

    }

    cartItems(): CartItem[]
    {
        return this.cartService.items;
    }

    increasyQty(item: CartItem){
        this.cartService.increasyQty(item);
    }

    decreasyQty(item: CartItem){
        this.cartService.decreasyQty(item);
    }

    remove(item: CartItem): any {
        this.cartService.removeItem(item);
      }

    itemsValue(): number {
        return this.cartService.total();
      }

}