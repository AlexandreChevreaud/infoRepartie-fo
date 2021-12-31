import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Navigations} from "../../Enums/Navigations";
import {LogInService} from "../../Services/LogInService";
import {Router} from "@angular/router";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  //TODO manque a changer le margin quand on est en mode déduit

  isReduit = false;

  @Input()
  navigations: Navigations | undefined;

  @Output()
  n = new EventEmitter<Navigations>();

  constructor(private logInService: LogInService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  isAccueil(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Accueil;
  }

  isEntreprise(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Entreprise;
  }

  isStagiaire(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Stagiaire;
  }

  isAide(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Aide;
  }

  isInscription(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Inscription;
  }

  addNewItem(value: Navigations) {
    this.n.emit(value);
  }

  deconnexion() {
    console.log("test")
    this.logInService.isConnected = false;
    this.logInService.isProfesseur = false;
    this.logInService.login = "";
    this.router.navigate(["login"])
    this.navigations = Navigations.Accueil;
  }
}
