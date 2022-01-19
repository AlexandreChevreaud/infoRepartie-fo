import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {EntrepriseService} from "../../../Services/EntrepriseService";
import {Entreprise} from "../../../Models/Entreprise";
import {Specialite} from "../../../Models/Specialite";
import {SpecialiteService} from "../../../Services/SpecialiteService";
import {StageService} from "../../../Services/StageService";
import {Stage} from "../../../Models/Stage";
import {Etudiant} from "../../../Models/Etudiant";
import {EtudiantService} from "../../../Services/EtudiantService";

@Component({
  selector: 'app-details-enteprise',
  templateUrl: './details-enteprise.component.html',
  styleUrls: ['./details-enteprise.component.scss']
})
export class DetailsEntepriseComponent implements OnInit {

  entreprise = <Entreprise>{};
  specEntreprise: string = "";
  specialites: Specialite[] = [];
  stages: Stage[] = [];
  etudiants: Etudiant[] = [];


  constructor(private router: Router,
              private logInService: LogInService,
              private entrepriseService: EntrepriseService,
              private specialiteService: SpecialiteService,
              private stageService: StageService,
              private etudiantService: EtudiantService,
              private route: ActivatedRoute,
  ) {

  }

//TODO enlever le scroll horizontal
  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }

    if (this.route.snapshot.queryParams["numEntreprise"]) {
      let id: number = <number>this.route.snapshot.queryParams["numEntreprise"];
      this.specialiteService.getAllSpecialite().subscribe((value => {
        this.specialites = value;
      }));
      this.entrepriseService.getEntrepriseAndSpecById(id).subscribe(value => {
        this.entreprise = value.entreprise;
        let specEntreprises = value.specEntreprises;
        value.specEntreprises.forEach((item) => {
          this.specEntreprise += this.specialites.find(x => x.numSpec == item.numSpec)?.libelle + " " ?? "";
        });
      });

      this.stageService.getStageByNumEntreprise(id).subscribe((value => {
        this.stages = value;
      }))

      this.etudiantService.getAllEtudiant().subscribe(value => {
        this.etudiants = value;
      });
    }
    //voir dans entreprise creation
  }

  getEtudiantNameById(id: number): string {
    var etu = this.etudiants.find(x => x.numEtudiant == id);
    return etu?.nomEtudiant + " " + etu?.prenomEtudiant
  }

  redirectToUpdateStage(stage: Stage) {
    this.router.navigate(['inscription'], {queryParams: {numStage: stage.numStage}})
  }
}
