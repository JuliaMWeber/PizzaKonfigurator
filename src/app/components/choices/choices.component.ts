import {
  Component,
  OnInit,
  ViewContainerRef,
  ViewChild,
  ComponentFactoryResolver,
  Output,
  EventEmitter,
} from "@angular/core";
import { PizzaComponent } from "./../pizza/pizza.component";
import { CartService } from "src/app/service/cart.service";
import { Pizza } from "../../models/pizza";

@Component({
  selector: "app-choices",
  templateUrl: "./choices.component.html",
  styleUrls: ["./choices.component.css"],
})
export class ChoicesComponent implements OnInit {
  @ViewChild("pizza", { static: true, read: ViewContainerRef })
  pizza: ViewContainerRef;

  selectedToppings: string[];
  toppings: string[];
  public pizzaSelected: Pizza[] = [];

  constructor(
    private resolver: ComponentFactoryResolver,
    private cartService: CartService
  ) {
    this.selectedToppings = [];
    (this.toppings = [
      "Sardellen",
      "Bacon",
      "Basilikum",
      "Chilli",
      "Mozzarella",
      "Pilze",
      "Oliven",
      "Zwiebeln",
      "Paprika",
      "Salami",
      "Garnelen",
      "Mais",
      "Tomaten",
    ]),
      this.cartService.getPizzas().subscribe((res) => {
        this.pizzaSelected = res;
      });
  }

  // Method to add topping to an array selectedToppings and remove it.

  selectToppings(topping) {
    // console.log(topping);
    if (this.selectedToppings.indexOf(topping) === -1) {
      this.selectedToppings.push(topping);
    } else {
      this.selectedToppings.splice(this.selectedToppings.indexOf(topping), 1);
    }
  }

  // Create the Pizza Dynamically and push the selectedToppings to it.

  createPizza() {
    const pizzaFactory = this.resolver.resolveComponentFactory(PizzaComponent);
    const pizza = this.pizza.createComponent(pizzaFactory);
    this.selectedToppings = []; // we will empty the selectedToppings array every time before creating a new pizza
    pizza.instance.toppings = this.selectedToppings;
  }
  chooseDough() {
    this.pizza
  }
  ngOnInit() {}
}
