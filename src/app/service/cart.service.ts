import { Injectable, EventEmitter } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { Pizza } from "../models/pizza";

@Injectable({
  providedIn: "root",
})
export class CartService {
  public cartItemList: any = [];
  public pizzaList = new BehaviorSubject<any>([]);
  public price = 0;
  constructor() {}

  getPizzas() {
    return this.pizzaList.asObservable();
  }

  setPizza(pizza: any) {
    this.cartItemList.push(...pizza);
    this.pizzaList.next(pizza);
  }

  addToCart(pizza: any) {
    this.cartItemList.push(pizza);
    this.pizzaList.next(this.cartItemList);
    this.getTotalPrice();
    // console.log(this.cartItemList);
    this.price += 5+pizza.length*0.5;
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total;
    });
    return grandTotal;
  }

  removeCartItem(pizza: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (pizza.id === a.id) {
        this.cartItemList.splice(index, 1);
      }
    });
  }

  removeAllCart() {
    this.cartItemList = [];
    this.pizzaList.next(this.cartItemList);
  }
}
