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
    private cartService: CartService,
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
      "Ananas",
      "Brokkoli",
      "Käse",
      "Thunfisch",
      "Knoblauch",
      "Artischocken",
      "Salat"
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
    const showDough: HTMLElement = document.getElementById("dough");
    showDough.style.display = 'block';
    const showCreateButton: HTMLElement = document.getElementById("createButton");
    showCreateButton.style.display = 'none';
    const showAddToCardButton: HTMLElement = document.getElementById("addToCardBtn");
    showAddToCardButton.style.display = 'none';
  }
  chooseDough(dough) {
    const showDough: HTMLElement = document.getElementById("dough");
    const showSauce: HTMLElement = document.getElementById("sauce");
    this.selectedToppings.push(dough);
    showSauce.style.display = 'block';
    showDough.style.display = 'none';
  }
  chooseSauce(sauce){
    const showSauce: HTMLElement = document.getElementById("sauce");
    const showToppings: HTMLElement = document.getElementById("toppings");
    const toppingsHeader: HTMLElement = document.getElementById("toppingsHeader");
    this.selectedToppings.push(sauce);
    showSauce.style.display = 'none';
    showToppings.style.display = 'flex';
    toppingsHeader.style.display = 'block';
    toppingsHeader.style.textAlign = 'center';
    const showAddToCardButton: HTMLElement = document.getElementById("addToCardBtn");
    showAddToCardButton.style.display = 'inline-block';
  }
  pizzaPrice(pizza): number{
    let amount = pizza.length;
    let price = 5 + amount*0.5;
    return price;
  }
  amountOfToppings(pizza):number{
    return pizza.length-2;
  }
  setCookie(name,value,days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }

  ngOnInit() {}
}
