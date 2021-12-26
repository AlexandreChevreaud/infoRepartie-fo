import {Component, OnInit} from '@angular/core';
import {Entreprise} from "../../Models/Entreprise";
import {Etudiant} from "../../Models/Etudiant";
import {Professeur} from "../../Models/Professeur";
import {TypeStage} from "../../Enums/TypeStage";
import {Router} from "@angular/router";
import {LogInService} from "../../Services/LogInService";
import {FormBuilder} from "@angular/forms";
import {Stage} from "../../Models/Stage";
import {ProfesseurService} from "../../Services/ProfesseurService";


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

  loginForm = this.formBuilder.group({
    entreprise: '',
    etudiant: '',
    professeur: '',
    dateDebut: Date.now(),
    dateFin: Date.now(),
    type: '',
    description: '',
    observation: '',

  });

  constructor(private formBuilder: FormBuilder, private router: Router, private logInService: LogInService, private ProfService: ProfesseurService) {


  }

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
    this.types = this.initStagetypes();
    this.ProfService.getAllProf().subscribe(value => {
      this.professeurs = value;
    });

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
    let stage: Stage = {
      debutStage: this.loginForm.value.dateDebut,
      descProjet: this.loginForm.value.description,
      finStage: this.loginForm.value.dateFin,
      numEtudiant: this.loginForm.value.etudiant,
      numProf: this.loginForm.value.professeur,
      observationStage: this.loginForm.value.observation,
      typeStage: this.loginForm.value.typeStage,
      numStage: 0,
      numEntreprise: this.loginForm.value.entreprise,
    };


  }
}
