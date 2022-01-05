import { Component, OnInit, Input } from '@angular/core';
import { PizzaService } from 'src/app/service/pizza.service';
import { CartService } from 'src/app/service/cart.service';
import { Pizza } from '../../models/pizza';

@Component({
	selector: 'app-pizzas',
	templateUrl: './pizzas.component.html',
	styleUrls: [ './pizzas.component.css' ]
})
export class PizzasComponent implements OnInit {
	Pizzas: Pizza[] = [];
	PizzasSelected: Pizza[] = [];

	constructor(private cartService: CartService, private pizzaService: PizzaService) {}

	ngOnInit() {
		// PizzaService
		this.pizzaService.getPizzas().subscribe((res) => {
			this.Pizzas = res;
			console.log(res);
		});

		// cartService
		this.cartService.getPizzas().subscribe((res) => {
			this.PizzasSelected = res;
			console.log(res);
			// this.grandTotal = this.cartService.getTotalPrice();
		});
	}

	addtoCart(pizza: any) {
		this.cartService.addToCart(pizza);
	}
}
