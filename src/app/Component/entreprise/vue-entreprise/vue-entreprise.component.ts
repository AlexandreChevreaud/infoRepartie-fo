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
  displayNameSelect: string[] = [];
  name: string = "";

  displayColumn: Record<string, boolean> =
    {
      "Numéro de l\'entreprise": true,
      "Nom de l\'entreprise": true,
      "Nom du contact": true,
      "Nom du responsable": true,
      "Adresse": false,
      "Telephone de l\'entreprise": false,
      "Fax de l\'entreprise": false,
      "Email": false,
      "Observation": false,
      "Site de l\'entreprise": false,
      "En activite": false
    }

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
    this.isProf = this.logInService.isProfesseur;

    this.entrepriseService.getAllEntreprises().subscribe((value => {
      this.entreprises = value;
    }));
    this.specEntrepriseService.getAllSpecEnterprise().subscribe((value => {
      this.specEntreprises = value;

    }));
    this.specialiteService.getAllSpecialite().subscribe((value => {
      this.specialites = value;
    }));
    this.displayNameSelect = [];
    this.displayNameSelect = this.updateDisplay();

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
    this.router.navigate(['creationentreprise']);
  }

  redirectToDetailsEntreprise() {
    this.router.navigate(['detailsentreprise']);

  }

  supprimerEntreprise(ent: number | undefined) {
    let id = <number>ent;
    this.entrepriseService.deleteEntreprise(id).subscribe(value => {
      var idx = this.entreprises.map(e => e.numEntreprise).indexOf(value);
      if (idx > -1) {
        this.entreprises.splice(idx, 1);
      }
    })
  }

  redirectToInscription() {
    this.router.navigate(['inscription']);

  }

  updateEnteprise(ent: Entreprise) {
    this.router.navigate(['inscription', {"data": ent}]);
  }

  changeDisplayColumn(name: string) {
    this.displayColumn[name] = !this.displayColumn[name];
    this.displayNameSelect = this.updateDisplay();
    this.name = this.displayNameSelect[0];
  }

  selectChange($event: any) {
    this.name = $event.target.value;
  }

  updateDisplay(): string[] {

    let tab: string[] = [];
    var list = (Object.keys(this.displayColumn) as Array<string>);

    list.forEach((value => {
      if (!this.displayColumn[value]) {
        tab.push(value);
      }
    }));
    return tab;
  }
}
