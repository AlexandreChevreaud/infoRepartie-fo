import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {accueilComponent} from "./Component/Accueil/accueil.component";
import {EntrepriseComponent} from "./Component/entreprise/entreprise.component";
import {LogInComponent} from "./Component/log-in/log-in.component";

const routes: Routes = [
  {path: 'accueil', component: accueilComponent},
  {path: 'entreprise', component: EntrepriseComponent},
  {path: 'login', component: LogInComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
