import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PizzasComponent } from "./components/pizzas/pizzas.component";
import { ChoicesComponent } from "./components/choices/choices.component";
import { HomeComponent } from "./components/home/home.component";
import { SignInComponent } from "./components/sign-in/sign-in.component";
// import { OrderComponent } from './components/order/order.component';
import { RegisterComponent } from "./components/register/register.component";
// import { FavoritenComponent } from "./components/favoriten/favoriten.component";
import { CartComponent } from "./components/cart/cart.component";
// import { LayoutsComponent } from './components/layouts/layouts.component';

const routes: Routes = [
  { path: "pizzas", component: PizzasComponent },
  { path: "konfiguration", component: ChoicesComponent },
  { path: "home", component: HomeComponent },
  { path: "einloggen", component: SignInComponent },
  { path: "anmelden", component: RegisterComponent },
  // { path: 'meine-bestellungen', component: OrderComponent },
  //   { path: "meine-favoriten", component: FavoritenComponent },
  { path: "cart", component: CartComponent },
  // { path: 'userID', component: LayoutsComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// Export an array with different routing components and import it in app.module.ts
export const routingComponents = [
  PizzasComponent,
  ChoicesComponent,
  HomeComponent,
  SignInComponent,
  // OrderComponent,
  RegisterComponent,
  //   FavoritenComponent,
  CartComponent,
];
