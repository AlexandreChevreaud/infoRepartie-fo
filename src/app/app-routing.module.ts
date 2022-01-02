import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {accueilComponent} from "./Component/Accueil/accueil.component";
import {EntrepriseComponent} from "./Component/entreprise/entreprise.component";
import {LogInComponent} from "./Component/log-in/log-in.component";
import {StagiaireComponent} from "./Component/stagiaire/stagiaire.component";
import {AideComponent} from "./Component/aide/aide.component";
import {InscriptionComponent} from "./Component/inscription/inscription.component";
import {EntrepriseCreationComponent} from "./Component/entreprise/entreprise-creation/entreprise-creation.component";
import {VueEntrepriseComponent} from "./Component/entreprise/vue-entreprise/vue-entreprise.component";

const routes: Routes = [
  {path: 'accueil', component: accueilComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: 'login', component: LogInComponent},
  {path: 'stagiaire', component: StagiaireComponent},
  {path: 'aide', component: AideComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'creationentreprise', component: EntrepriseCreationComponent},
  {path: 'vue', component: VueEntrepriseComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
