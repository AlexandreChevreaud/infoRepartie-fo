import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {EntrepriseService} from "../../../Services/EntrepriseService";
import {Entreprise} from "../../../Models/Entreprise";
import {SpecEntrepriseService} from "../../../Services/SpecEntrepriseService";
import {SpecialiteService} from "../../../Services/SpecialiteService";
import {Specialite} from "../../../Models/Specialite";
import {SpecEntreprise} from "../../../Models/SpecEntreprise";

//TODO Site dans le tableau
//TODO SPECS

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
  entreprisesRecherche: Entreprise[] = [];
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
      "Specialite": false
    }

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
    this.isProf = this.logInService.isProfesseur;

    this.entrepriseService.getAllEntreprises().subscribe((value => {
      this.entreprises = value;
      this.entreprisesRecherche = value;
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

  findSpecialiteNumber(numEntreprise: number | undefined): Array<SpecEntreprise> {
    var num = <number>numEntreprise;
    var a = this.specEntreprises.filter(x => x.numEntreprise == num);
    return a;
  }

  findSpecialite(specs: Array<SpecEntreprise>): string {
    var s = "";
    specs.forEach((value => {
      console.log(value);
      s += this.specialites.find(x => x.numSpec == value.numSpec)?.libelle ?? "";
      s += " ";
    }));
    return s;
  }

  getSpecialite(numEntreprise: number | undefined): string {
    // console.log(numEntreprise);
    var a = this.findSpecialiteNumber(numEntreprise);
    // console.log(a);
    var b = this.findSpecialite(a);
    // console.log(b);
    return b;
  }


  createEntreprise() {
    this.router.navigate(['creationentreprise']);
  }

  redirectToDetailsEntreprise(ent: Entreprise) {
    console.log(ent.numEntreprise);
    this.router.navigate(['detailsentreprise'], {queryParams: {numEntreprise: ent.numEntreprise}});

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
    this.router.navigate(['creationentreprise'], {queryParams: {numEntreprise: ent.numEntreprise}});
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

  recherche(event: Event) {
    this.entreprisesRecherche = []
    let recherche = (event.target as HTMLInputElement).value;
    this.entreprises.forEach(value => {
      if (value.raisonSociale.toLowerCase().startsWith(recherche.toLowerCase(), 0)) {
        this.entreprisesRecherche.push(value)
      }
    });
  }
}
