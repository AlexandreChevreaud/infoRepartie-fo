import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {EntrepriseService} from "../../../Services/EntrepriseService";
import {Entreprise} from "../../../Models/Entreprise";
import {SpecEntrepriseService} from "../../../Services/SpecEntrepriseService";
import {SpecialiteService} from "../../../Services/SpecialiteService";
import {Specialite} from "../../../Models/Specialite";
import {SpecEntreprise} from "../../../Models/SpecEntreprise";

@Component({
  selector: 'app-vue-entreprise',
  templateUrl: './vue-entreprise.component.html',
  styleUrls: ['./vue-entreprise.component.scss']
})
export class VueEntrepriseComponent implements OnInit {

  constructor(private router: Router,
              private logInService: LogInService,
              private entrepriseService: EntrepriseService,
              private specEntrepriseService: SpecEntrepriseService,
              private specialiteService: SpecialiteService) {
  }

  entreprises: Entreprise[] = [];
  specialites: Specialite[] = [];
  specEntreprises: SpecEntreprise[] = [];
  isProf: boolean = false;

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
    this.isProf = this.logInService.isProfesseur;

    this.logInService.isProfesseur

    this.entrepriseService.getAllEntreprises().subscribe((value => {
      this.entreprises = value;
    }));
    this.specEntrepriseService.getAllSpecEnterprise().subscribe((value => {
      this.specEntreprises = value;

    }));
    this.specialiteService.getAllSpecialite().subscribe((value => {
      this.specialites = value;
      console.log(value);
      //TODO trouver pk les specialite ne chargent pas
    }));

  }

  findSpecialiteNumber(numEntreprise: number | undefined): number {
    return this.specEntreprises.find(x => x.numEntreprise == numEntreprise)?.numSpec ?? 0;
  }

  findSpecialite(numSpecialte: number): string {
    return this.specialites.find(x => x.numSpec == numSpecialte)?.libelle ?? "";
  }

  getSpecialite(numEntreprise: number | undefined): string {
    var a = this.findSpecialiteNumber(numEntreprise);
    var b = this.findSpecialite(a);
    return b;
  }


  createEntreprise() {

  }

  findEntreprise() {

  }
}
