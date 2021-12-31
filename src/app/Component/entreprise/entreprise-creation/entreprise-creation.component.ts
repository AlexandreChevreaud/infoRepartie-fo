import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-entreprise-creation',
  templateUrl: './entreprise-creation.component.html',
  styleUrls: ['./entreprise-creation.component.scss']
})
export class EntrepriseCreationComponent implements OnInit {

  loginForm = this.formBuilder.group({
    nom: '',
    prenom: '',
    username: '',
    pass: '',
    dateObtention: Date.now(),
    classe: 0,

  });
  specialites: Array<any> = [];

  constructor(private router: Router,
              private logInService: LogInService,
              private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    this.specialites = [];
  }

  onSubmit() {

  }
}
