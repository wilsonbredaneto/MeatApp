import { Injectable } from "@angular/core";
import { ShoppingCartService } from "app/restaurant-detail/shopping-cart/shoppint-cart.service";
import { CartItem } from "app/restaurant-detail/shopping-cart/cart-item.model";
import { Order } from "./order.model";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions, Headers } from "@angular/http";
import { MEAT_API } from "app/app.api";

@Injectable()
export class OrderService{

    constructor(private cartService: ShoppingCartService, private http: Http)
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
      
    checkOrder(order: Order): Observable<string> {
        const headers = new Headers();
        headers.append("Content-Type", "aplication/json");
        const requestOptions = new RequestOptions();
        requestOptions.headers = headers;
        return this.http.post(`${MEAT_API}/orders`, 
                              JSON.stringify(order), 
                              requestOptions)  
        .map(response => response.json())
        .map(order => order.id);
      }

      clear(): any {
        this.cartService.clear();
      }

}