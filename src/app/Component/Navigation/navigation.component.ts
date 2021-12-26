import {Component, Input, OnInit} from '@angular/core';
import {Navigations} from "../../Enums/Navigations";


@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  //TODO Réparer l'input pour que ca marche et mettre les ngclass dans le HTML

  @Input()
  navigations: Navigations | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  isAccueil(): boolean {
    return this.navigations !== undefined && this.navigations == Navigations.Accueil;
  }

}
