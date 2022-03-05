import { Component, OnInit } from "@angular/core";
import { CartService } from "src/app/service/cart.service";
import { PizzaService } from "src/app/service/pizza.service";
import { Pizza } from "../../models/pizza";
@Component({
  selector: "app-pizza",
  templateUrl: "./pizza.component.html",
  styleUrls: ["./pizza.component.css"],
})
export class PizzaComponent implements OnInit {
  toppings: string[];
  PizzaSelected: Pizza[] = [];
  // toppings: Pizza[] = [];
  // we dont need to use @Input() here, instead we create a variable and use instance with createPizza();

  constructor(
    private cartService: CartService,
    private pizzaService: PizzaService
  ) {}

  ngOnInit() {
    this.cartService.getPizzas().subscribe((res) => {
      this.PizzaSelected = res;
    });
  }

  getMyStyles(i) {
    const myStyles = {
      transform: this.translate(i),
    };
    return myStyles;
  }

  translate(i) {
    const x = -30 + Math.round(50 * Math.cos(i * ((2 * Math.PI) / 15))) + "px";
    const y = 10 + Math.round(26 * Math.sin(i * ((2 * Math.PI) / 15))) + "px";
    const val = `translate(${x}, ${y})`;
    return val;
  }

  // we need an array of the customized pizzas with its selectedToppings
  addtoCart(topping: any) {
    // topping = this.toppings;
    this.cartService.addToCart(this.toppings);
    console.log(this.toppings);
    const showCreateButton: HTMLElement = document.getElementById("createButton");
    const showToppings: HTMLElement = document.getElementById("toppings");
    const toppingsHeader: HTMLElement = document.getElementById("toppingsHeader");
    showCreateButton.style.display = 'block';
    showCreateButton.style.textAlign = 'center';
    showToppings.style.display = 'none';
    toppingsHeader.style.display = 'none';
  }
}
