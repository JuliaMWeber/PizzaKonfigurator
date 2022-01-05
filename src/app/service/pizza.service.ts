import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Pizza } from '../models/pizza';

@Injectable({
	providedIn: 'root'
})
export class PizzaService {
	private apiUrl = 'http://localhost:5000/pizzas';
	constructor(private http: HttpClient) {}

	getPizzas(): Observable<Pizza[]> {
		return this.http.get<Pizza[]>(this.apiUrl);
	}
}
