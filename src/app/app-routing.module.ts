import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {accueilComponent} from "./Component/Accueil/accueil.component";
import {EntrepriseComponent} from "./entreprise/entreprise.component";

const routes: Routes = [
  {path: 'accueil', component: accueilComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: '', redirectTo: '/accueil', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
