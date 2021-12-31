import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {FormBuilder} from "@angular/forms";
import {Entreprise} from "../../../Models/Entreprise";
import {EntrepriseService} from "../../../Services/EntrepriseService";

@Component({
  selector: 'app-entreprise-creation',
  templateUrl: './entreprise-creation.component.html',
  styleUrls: ['./entreprise-creation.component.scss']
})
export class EntrepriseCreationComponent implements OnInit {

  loginForm = this.formBuilder.group({
    nomEntreprise: '',
    nomContact: '',
    nomResp: '',
    rue: '',
    codePostal: '',
    ville: '',
    tel: '',
    fax: '',
    mail: '',
    obs: '',
    url: '',
    niveau: '',
    spec: ''
  });
  specialites: Array<any> = [];

  constructor(private router: Router,
              private logInService: LogInService,
              private formBuilder: FormBuilder,
              private entrepriseService: EntrepriseService) {
  }

  ngOnInit(): void {
    this.specialites = [];
  }

  onSubmit() {

    console.log(this.loginForm.value);
    let ent: Entreprise = {
      Email: this.loginForm.value.mail,
      niveau: this.loginForm.value.niveau,
      nomResp: this.loginForm.value.nomResp,
      observation: this.loginForm.value.obs,
      cpEntreprise: this.loginForm.value.codePostal,
      faxEntreprise: this.loginForm.value.fax,
      nomContact: this.loginForm.value.nomContact,
      numEntreprise: 0,
      raisonSociale: this.loginForm.value.nomEntreprise,
      rueEntreprise: this.loginForm.value.rue,
      siteEntreprise: this.loginForm.value.url,
      telEntreprise: this.loginForm.value.tel,
      villeEntreprise: this.loginForm.value.ville,
      enActivite: 1


    };

    this.entrepriseService.createEntreprise(ent).subscribe();
  }
}
