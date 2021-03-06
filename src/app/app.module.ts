import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {accueilComponent} from "./Component/Accueil/accueil.component";
import {NavigationComponent} from './Component/Navigation/navigation.component';
import {EntrepriseComponent} from './Component/entreprise/entreprise.component';
import {AppComponent} from "./app.component";
import {InscriptionComponent} from './Component/inscription/inscription.component';
import {StagiaireComponent} from './Component/stagiaire/stagiaire.component';
import {AideComponent} from './Component/aide/aide.component';
import {LogInComponent} from './Component/log-in/log-in.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { VueEntrepriseComponent } from './Component/entreprise/vue-entreprise/vue-entreprise.component';
import { EntrepriseCreationComponent } from './Component/entreprise/entreprise-creation/entreprise-creation.component';
import { DetailsEntepriseComponent } from './Component/entreprise/details-enteprise/details-enteprise.component';
import { ListEtudiantComponent } from './Component/stagiaire/list-etudiant/list-etudiant.component';
import { DetailsEtudiantComponent } from './Component/stagiaire/details-etudiant/details-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    accueilComponent,
    NavigationComponent,
    EntrepriseComponent,
    InscriptionComponent,
    StagiaireComponent,
    AideComponent,
    LogInComponent,
    EntrepriseCreationComponent,
    VueEntrepriseComponent,
    EntrepriseCreationComponent,
    DetailsEntepriseComponent,
    ListEtudiantComponent,
    DetailsEtudiantComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule {
}
