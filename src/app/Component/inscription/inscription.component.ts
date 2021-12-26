import {Component, OnInit} from '@angular/core';
import {Entreprise} from "../../Models/Entreprise";
import {Etudiant} from "../../Models/Etudiant";
import {Professeur} from "../../Models/Professeur";


@Component({
  selector: 'inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  entreprises : Entreprise[];
  etudiants : Etudiant[];
  professeurs : Professeur[];

  constructor() {
    this.entreprises = [];
    this.etudiants = [];
    this.professeurs = [];
  }

  ngOnInit(): void {
  }

}
