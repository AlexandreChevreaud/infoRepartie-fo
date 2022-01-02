import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../Services/LogInService";
import {Classe} from "../../Models/Classe";
import {FormBuilder} from "@angular/forms";
import {ClasseService} from "../../Services/ClasseService";
import {Etudiant} from "../../Models/Etudiant";
import {EtudiantService} from "../../Services/EtudiantService";

@Component({
  selector: 'stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.scss']
})
export class StagiaireComponent implements OnInit {

  constructor(private router: Router,
              private logInService: LogInService,
              private formBuilder: FormBuilder,
              private classeService: ClasseService,
              private etudiantService: EtudiantService) {
  }

  classes: Classe[] = [];

  loginForm = this.formBuilder.group({
    nom: '',
    prenom: '',
    username: '',
    pass: '',
    dateObtention: Date.now(),
    classe: 0,

  });

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }

    this.classeService.getAllClasses().subscribe(value => {
      this.classes = value;
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      let etu: Etudiant =
        {
          numEtudiant: 0,
          nomEtudiant: this.loginForm.value.nom,
          prenomEtudiant: this.loginForm.value.prenom,
          anneeObtention: this.loginForm.value.dateObtention,
          login: this.loginForm.value.username,
          mdp: this.loginForm.value.pass,
          numClasse: this.loginForm.value.classe,
          enActivite: 0, //TODO c'est quoi ca ?
        };
      this.etudiantService.createEtudiant(etu).subscribe();
    } else {
      //TODO Faire un truc en cas d'erreur + mettre le message
    }
  }
}
