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

  ngOnInit() {
    this.cartService.getPizzas().subscribe((res) => {
      this.PizzasSelected = res;
      console.log(res);
      // this.grandTotal = this.cartService.getTotalPrice();
    });
  }
}
