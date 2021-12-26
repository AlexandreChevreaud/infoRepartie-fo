import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";

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

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log("test")
  }
}
