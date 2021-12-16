import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ConstantsComponent } from './constants/constants.component';
import { DirectivesComponent } from './directives/directives.component';
import { GuardsComponent } from './guards/guards.component';
import { HelpersComponent } from './helpers/helpers.component';
import { ModelsComponent } from './models/models.component';
import { ProvidersComponent } from './providers/providers.component';
import { ResolversComponent } from './resolvers/resolvers.component';
import { ServicesComponent } from './services/services.component';
import { HomeComponent } from './components/home/home.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register.component';
import { CartComponent } from './components/cart/cart.component';
import { OrderComponent } from './components/order/order.component';
import { LayoutsComponent } from './components/layouts/layouts.component';
import { UserComponent } from './layouts/user/user.component';
import { GuestComponent } from './layouts/guest/guest.component';
import { PizzasComponent } from './components/pizzas/pizzas.component';
import { CustomizePizzaComponent } from './components/customize-pizza/customize-pizza.component';
import { ChoicesComponent } from './components/choices/choices.component';
import { PizzaComponent } from './components/pizza/pizza.component';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		ConstantsComponent,
		DirectivesComponent,
		GuardsComponent,
		HelpersComponent,
		ModelsComponent,
		ProvidersComponent,
		ResolversComponent,
		ServicesComponent,
		HomeComponent,
		SignInComponent,
		RegisterComponent,
		CartComponent,
		OrderComponent,
		LayoutsComponent,
		UserComponent,
		GuestComponent,
		PizzasComponent,
		CustomizePizzaComponent,
		ChoicesComponent,
		PizzaComponent
	],
	entryComponents: [ PizzaComponent ],
	imports: [ BrowserModule, AppRoutingModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
