import {Component, OnInit} from '@angular/core';
import {Navigations} from "./Enums/Navigations";
import {LogInService} from "./Services/LogInService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nav: Navigations = Navigations.Accueil;


  constructor(private logInService: LogInService) {
  }

  ngOnInit(): void {
  }

  updateNav(navigations: Navigations) {
    this.nav = navigations;
  }
}
