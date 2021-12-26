import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {accueilComponent} from "./Component/Accueil/accueil.component";
import {NavigationComponent} from './Component/Navigation/navigation.component';
import {EntrepriseComponent} from './entreprise/entreprise.component';
import {AppComponent} from "./app.component";

@NgModule({
  declarations: [
    AppComponent,
    accueilComponent,
    NavigationComponent,
    EntrepriseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
