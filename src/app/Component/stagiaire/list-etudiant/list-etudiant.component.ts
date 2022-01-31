import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {Stage} from "../../../Models/Stage";
import {Etudiant} from "../../../Models/Etudiant";
import {EtudiantService} from "../../../Services/EtudiantService";
import {EntrepriseService} from "../../../Services/EntrepriseService";
import {Entreprise} from "../../../Models/Entreprise";
import {StageService} from "../../../Services/StageService";
import {Professeur} from "../../../Models/Professeur";
import {ProfesseurService} from "../../../Services/ProfesseurService";

@Component({
  selector: 'app-list-etudiant',
  templateUrl: './list-etudiant.component.html',
  styleUrls: ['./list-etudiant.component.scss']
})
export class ListEtudiantComponent implements OnInit {

  constructor(private router: Router,
              private logInService: LogInService,
              private etudiantService: EtudiantService,
              private stageService: StageService,
              private profService: ProfesseurService,
              private entrepriseService: EntrepriseService) {
  }

  entreprises: Entreprise[] = [];
  stages: Stage[] = [];
  etudiant: Etudiant[] = [];
  profs: Professeur[] = [];
  etudiantRecherche: Etudiant[] = [];
  isProf: boolean = false;
  displayNameSelect: string[] = [];
  name: string = "";


  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
    this.isProf = this.logInService.isProfesseur;

    this.etudiantService.getAllEtudiant().subscribe((value => {
      this.etudiant = value;
      this.etudiantRecherche = value;
    }));
    this.entrepriseService.getAllEntreprises().subscribe((value => {
      this.entreprises = value;
    }));
    this.stageService.getAllStages().subscribe((value => {
      this.stages = value;
    }));
    this.profService.getAllProf().subscribe((value => {
      this.profs = value;
    }));
    this.displayNameSelect = [];
    // this.displayNameSelect = this.updateDisplay();

  }

  getEntrepriseNameFromStage(etuId: any) {
    var idEntreprise = this.stages.find(x => x.numEtudiant == etuId)?.numEntreprise ?? null;
    if (idEntreprise == null)
      return "";
    return this.entreprises.find(x => idEntreprise == x.numEntreprise)?.raisonSociale ?? ""
  }

  getProfNameFromStage(etuId: any) {
    var numProf = this.stages.find(x => x.numEtudiant == etuId)?.numProf ?? null;
    if (numProf == null)
      return "";
    return this.profs.find(x => numProf == x.numProf)?.nomProf ?? ""
  }

  // findSpecialiteNumber(numEntreprise: number | undefined): Array<SpecEntreprise> {
  //   var num = <number>numEntreprise;
  //   var a = this.specEntreprises.filter(x => x.numEntreprise == num);
  //   return a;
  // }
  //
  // findSpecialite(specs: Array<SpecEntreprise>): string {
  //   var s = "";
  //   specs.forEach((value => {
  //     console.log(value);
  //     s += this.specialites.find(x => x.numSpec == value.numSpec)?.libelle ?? "";
  //     s += " ";
  //   }));
  //   return s;
  // }

  // getSpecialite(numEntreprise: number | undefined): string {
  //   // console.log(numEntreprise);
  //   var a = this.findSpecialiteNumber(numEntreprise);
  //   // console.log(a);
  //   var b = this.findSpecialite(a);
  //   // console.log(b);
  //   return b;
  // }


  createEntreprise() {
    this.router.navigate(['creationentreprise']);
  }

  redirectToDetailsEtudiant(etu: Etudiant) {
    // this.router.navigate(['detailsentreprise'], {queryParams: {numEntreprise: ent.numEntreprise}});
    //TODO update etudiants

  }

  // supprimerEntreprise(ent: number | undefined) {
  //   let id = <number>ent;
  //   this.entrepriseService.deleteEntreprise(id).subscribe(value => {
  //     var idx = this.entreprises.map(e => e.numEntreprise).indexOf(value);
  //     if (idx > -1) {
  //       this.entreprises.splice(idx, 1);
  //     }
  //   })
  // }

  redirectToInscription() {
    this.router.navigate(['inscription']);

  }

  //
  // updateEnteprise(ent: Entreprise) {
  //   this.router.navigate(['creationentreprise'], {queryParams: {numEntreprise: ent.numEntreprise}});
  // }

  // changeDisplayColumn(name: string) {
  //   this.displayColumn[name] = !this.displayColumn[name];
  //   this.displayNameSelect = this.updateDisplay();
  //   this.name = this.displayNameSelect[0];
  // }

  selectChange($event: any) {
    this.name = $event.target.value;
  }

  // updateDisplay(): string[] {
  //   let tab: string[] = [];
  //   var list = (Object.keys(this.displayColumn) as Array<string>);
  //
  //   list.forEach((value => {
  //     if (!this.displayColumn[value]) {
  //       tab.push(value);
  //     }
  //   }));
  //   return tab;
  // }

  recherche(event: Event) {
    this.etudiantRecherche = []
    let recherche = (event.target as HTMLInputElement).value;
    this.etudiant.forEach(value => {
      if (value.nomEtudiant.toLowerCase().startsWith(recherche.toLowerCase(), 0)) {
        this.etudiantRecherche.push(value)
      }
    });
  }

  deleteEtudiant(numEntreprise: any) {

  }

  updateEtudiant(etu: Etudiant) {

  }
}
