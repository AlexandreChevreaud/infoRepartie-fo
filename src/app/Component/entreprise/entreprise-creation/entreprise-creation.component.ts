import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
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

  isUpdate = false;

  entreprise: Entreprise | undefined;

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
              private specEntrepriseService: SpecEntrepriseService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }

    this.specService.getAllSpecialite().subscribe((value => {
      this.specialites = value;
    }))


    if (this.route.snapshot.queryParams["numEntreprise"]) {
      this.isUpdate = true;
      let specEtEntreprise = this.entrepriseService.getEntrepriseAndSpecById(this.route.snapshot.queryParams["numEntreprise"]).subscribe(
        value => {
          this.entreprise = value.entreprise;
          let listSpec: number[] = [];
          value.specEntreprises.forEach(value1 => {
            listSpec.push(this.specialites[value1.numSpec - 1].numSpec);
          });
          this.loginForm = this.formBuilder.group({
            nomEntreprise: value.entreprise.raisonSociale,
            nomContact: value.entreprise.nomContact,
            nomResp: value.entreprise.nomResp,
            rue: value.entreprise.rueEntreprise,
            codePostal: value.entreprise.cpEntreprise,
            ville: value.entreprise.villeEntreprise,
            tel: value.entreprise.telEntreprise,
            fax: value.entreprise.faxEntreprise,
            mail: value.entreprise.email,
            obs: value.entreprise.observation,
            url: value.entreprise.siteEntreprise,
            niveau: value.entreprise.niveau,
            spec: Array.of(listSpec)
          });
        });
    }
  }

  //TODO faire le truc des specs

  onSubmit() {
    if (this.loginForm.valid) {
      let ent: Entreprise = {
        numEntreprise: !this.isUpdate ? undefined : this.entreprise?.numEntreprise,
        email: this.loginForm.value.mail,
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
        let spec: Array<SpecEntreprise> = [];
        this.loginForm.value.spec.forEach((item: number) => {
          let s: SpecEntreprise = {
            numSpec: item,
            numEntreprise: value?.numEntreprise ?? 0
          };
          spec.push(s);
        });
        this.specEntrepriseService.createSpecEnterprise(spec).subscribe();


      }));
    } else {
      alert("Erreur - Merci de vérifier les données des champs en rouge");
    }

  }
}
