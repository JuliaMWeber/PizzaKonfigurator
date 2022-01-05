import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PizzaService } from '../service/pizza.service';

@Injectable({
	providedIn: 'root'
})
export class DataStorageService {
	constructor(private http: HttpClient, private pizzaService: PizzaService) {}

	storeData() {
		const pizzas = this.pizzaService.getPizzas();
		this.http.put('http://localhost:5000/pizzas', pizzas).subscribe((res) => {
			console.log(res);
		});
	}

	fetchData() {
		this.http.get('http://localhost:5000/pizzas').subscribe((res) => {
			console.log(res);
		});
	}
}
