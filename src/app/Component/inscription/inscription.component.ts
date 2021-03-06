import {Component, OnInit} from '@angular/core';
import {Entreprise} from "../../Models/Entreprise";
import {Etudiant} from "../../Models/Etudiant";
import {Professeur} from "../../Models/Professeur";
import {TypeStage} from "../../Enums/TypeStage";
import {ActivatedRoute, Router} from "@angular/router";
import {LogInService} from "../../Services/LogInService";
import {FormBuilder} from "@angular/forms";
import {Stage} from "../../Models/Stage";
import {ProfesseurService} from "../../Services/ProfesseurService";
import {EtudiantService} from "../../Services/EtudiantService";
import {EntrepriseService} from "../../Services/EntrepriseService";
import {StageService} from "../../Services/StageService";


@Component({
  selector: 'inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})


export class InscriptionComponent implements OnInit {
  entreprises: Entreprise[] = [];
  etudiants: Etudiant[] = [];
  professeurs: Professeur[] = [];
  types: string[] = [];

  formGroup = this.formBuilder.group({
    entreprise: null,
    etudiant: null,
    professeur: null,
    dateDebut: Date.now(),
    dateFin: Date.now(),
    type: null,
    description: '',
    observation: '',
  });

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private logInService: LogInService,
              private profService: ProfesseurService,
              private etudiantService: EtudiantService,
              private enterpriseService: EntrepriseService,
              private stageService: StageService) {


  }

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
    this.types = this.initStagetypes();
    this.profService.getAllProf().subscribe(value => {
      this.professeurs = value;
    });

    this.etudiantService.getAllEtudiant().subscribe(value => {
      this.etudiants = value;
    });

    this.enterpriseService.getAllEntreprises().subscribe(value => {
      this.entreprises = value;
    });

    if (this.route.snapshot.queryParams["numStage"]) {
      let id: number = <number>this.route.snapshot.queryParams["numStage"]
      this.stageService.getStage(id).subscribe(value => {
        if (value) {
          let debutStage = new Date(value.debutStage)
          let finStage = new Date(value.finStage)
          this.formGroup = this.formBuilder.group({
            entreprise: value.numEntreprise,
            etudiant: value.numEtudiant,
            professeur: value.numProf,
            dateDebut: '' + debutStage.getFullYear() + '-' + (debutStage.getMonth() < 10 ? '0' + debutStage.getMonth() : debutStage.getMonth()) + '-' + (debutStage.getDay() < 10 ? '0' + debutStage.getDay() : debutStage.getDay()),
            dateFin: '' + finStage.getFullYear() + '-' + (finStage.getMonth() < 10 ? '0' + finStage.getMonth() : finStage.getMonth()) + '-' + (finStage.getDay() < 10 ? '0' + finStage.getDay() : finStage.getDay()),
            type: value.typeStage.replace(/^./, value.typeStage[0].toUpperCase()),
            description: value.descProjet,
            observation: value.observationStage,
          });
        }
      });
    }

  }

  initStagetypes(): string[] {
    var types: string[] = [];
    var a = Object.values(TypeStage).filter(x => typeof x == "string");
    a.forEach((value) => {
      types.push(value.toString());
    });
    return types;
  }


  onSubmit() {
    console.log(this.formGroup.value.dateDebut)
    if (this.formGroup.valid) {
      let stage: Stage = {
        debutStage: this.formGroup.value.dateDebut,
        descProjet: this.formGroup.value.description,
        finStage: this.formGroup.value.dateFin,
        numEtudiant: this.formGroup.value.etudiant,
        numProf: this.formGroup.value.professeur,
        observationStage: this.formGroup.value.observation,
        typeStage: this.formGroup.value.type,
        numStage: 0,
        numEntreprise: this.formGroup.value.entreprise,
      };
      this.stageService.createStage(stage).subscribe();
    } else {
      alert("Erreur - Merci de v??rifier les donn??es des champs en rouge")
    }

  }


}
