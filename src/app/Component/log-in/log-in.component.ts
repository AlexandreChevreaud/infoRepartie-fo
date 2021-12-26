import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {LogInService} from "../../Services/LogInService";

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
              private loginService: LogInService) {
  }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.loginForm.value.login)
    this.loginService.isEtudiantExistant(this.loginForm.value.login, this.loginForm.value.password).subscribe()
  }
}
