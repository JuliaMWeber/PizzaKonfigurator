import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/service/cart.service";
import { Pizza } from "../../models/pizza";

@Component({
  selector: "app-cart",
  templateUrl: "./cart.component.html",
  styleUrls: ["./cart.component.css"],
})
export class CartComponent implements OnInit {
  public PizzasSelected: Pizza[] = [];
  // public grandTotal !: number;

  constructor(private cartService: CartService) {}

  getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  ngOnInit() {
    this.cartService.getPizzas().subscribe((res) => {
      this.PizzasSelected = res;
      console.log(res);
      // this.grandTotal = this.cartService.getTotalPrice();
    });
  }
}
