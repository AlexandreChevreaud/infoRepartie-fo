import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {FormBuilder} from "@angular/forms";
import {Entreprise} from "../../../Models/Entreprise";
import {EntrepriseService} from "../../../Services/EntrepriseService";
import {Specialite} from "../../../Models/Specialite";
import {SpecEntreprise} from "../../../Models/SpecEntreprise";
import {SpecialiteService} from "../../../Services/SpecialiteService";
import {SpecEntrepriseService} from "../../../Services/SpecEntrepriseService";

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
    spec: []
  });


  specialites: Array<Specialite> = [];

  constructor(private router: Router,
              private logInService: LogInService,
              private formBuilder: FormBuilder,
              private entrepriseService: EntrepriseService,
              private specService: SpecialiteService,
              private specEntrepriseService: SpecEntrepriseService) {
  }

  ngOnInit(): void {
    this.specService.getAllSpecialite().subscribe((value => {
      this.specialites = value;
    }))

  }

  onSubmit() {
    let ent: Entreprise = {
      numEntreprise: undefined,
      Email: this.loginForm.value.mail,
      niveau: this.loginForm.value.niveau,
      nomResp: this.loginForm.value.nomResp,
      observation: this.loginForm.value.obs,
      cpEntreprise: this.loginForm.value.codePostal,
      faxEntreprise: this.loginForm.value.fax,
      nomContact: this.loginForm.value.nomContact,
      raisonSociale: this.loginForm.value.nomEntreprise,
      rueEntreprise: this.loginForm.value.rue,
      siteEntreprise: this.loginForm.value.url,
      telEntreprise: this.loginForm.value.tel,
      villeEntreprise: this.loginForm.value.ville,
      enActivite: 1
    };


    this.entrepriseService.createEntreprise(ent).subscribe((value => {
      console.log(value);
      let spec: Array<SpecEntreprise> = [];
      this.loginForm.value.spec.forEach((item: number) => {
        let s: SpecEntreprise = {
          numSpec: item,
          numEntreprise: this.loginForm.value.spec
        };
        spec.push(s);
      });
      console.log(spec);
      this.specEntrepriseService.createSpecEnterprise(spec).subscribe();


    }));

    //TODO attendre le retour du post l'entreprise pour get le num de l'entreprise (qui est genere par la base) et refaire un post dans la table specialité avec toutes les spécialité de l'entreprise
  }
}
