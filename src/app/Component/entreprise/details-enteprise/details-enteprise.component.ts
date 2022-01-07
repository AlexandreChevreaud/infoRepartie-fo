import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {EntrepriseService} from "../../../Services/EntrepriseService";
import {Entreprise} from "../../../Models/Entreprise";
import {Specialite} from "../../../Models/Specialite";

@Component({
  selector: 'app-details-enteprise',
  templateUrl: './details-enteprise.component.html',
  styleUrls: ['./details-enteprise.component.scss']
})
export class DetailsEntepriseComponent implements OnInit {

  entreprise = <Entreprise>{};
  //TODO check ca

  specialites : Specialite[] = [];


  constructor(private router: Router,
              private logInService: LogInService,
              private entrepriseService: EntrepriseService,
              private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams["numEntreprise"]) {
      let id: number = <number>this.route.snapshot.queryParams["numEntreprise"];
      this.entrepriseService.getEntrepriseAndSpecById(id).subscribe(value => {
        console.log(value);
        this.entreprise = value.entreprise;
        let specEntreprises = value.specEntreprises;
        value.specEntreprises.forEach((item)=>
        {

        });
      });
    }
    //voir dans entreprise creation
  }
}
