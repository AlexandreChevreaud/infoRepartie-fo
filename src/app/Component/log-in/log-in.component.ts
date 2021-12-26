import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LogInService} from "../../Services/LogInService";
import {Router} from "@angular/router";

@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  loginForm = this.formBuilder.group({
    login: '',
    password: '',
    typeConnexion: ''
  });

  constructor(private formBuilder: FormBuilder,
              private loginService: LogInService,
              private router: Router) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    if (this.loginForm.value.typeConnexion === "Etudiant") {
      this.loginService.isEtudiantExistant(this.loginForm.value.login, this.loginForm.value.password).subscribe(value => {
        this.loginService.isConnected = value
        if (value) {
          this.router.navigate(['accueil']);
        }
      });
    } else {
      this.loginService.isProfesseurExistant(this.loginForm.value.login, this.loginForm.value.password).subscribe(value => {
        this.loginService.isConnected = value
        if (value) {
          this.loginService.isProfesseur = value;
          this.router.navigate(['accueil']);
        }
      });
    }
  }
}
