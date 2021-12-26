import {Component, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {LogInService} from "../../Services/LogInService";

@Component({
  selector: 'accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class accueilComponent implements OnInit {

  constructor(private router: Router,
              private logInService: LogInService) {
  }

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
  }

}
