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

  reduit = false;

  @Input()
  navigations: Navigations | undefined;

  @Output()
  n = new EventEmitter<Navigations>();

  @Output()
  isReduit = new EventEmitter<boolean>();

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

  reduire(value: boolean) {
    this.reduit = value;
    this.isReduit.emit(this.reduit)
  }

  deconnexion() {
    this.logInService.isConnected = false;
    this.logInService.isProfesseur = false;
    this.logInService.login = "";
    this.router.navigate(["login"])
    this.navigations = Navigations.Accueil;
  }
}
