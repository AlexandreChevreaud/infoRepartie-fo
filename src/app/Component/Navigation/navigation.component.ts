import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Navigations} from "../../Enums/Navigations";


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

  constructor() {
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

  isDeconnexion(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Deconnexion;
  }

  isInscription(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Inscription;
  }

  addNewItem(value: Navigations) {
    this.n.emit(value);
  }
}
