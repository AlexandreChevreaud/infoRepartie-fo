import {Component, OnInit} from '@angular/core';
import {Etudiant} from "../../../Models/Etudiant";
import {ActivatedRoute, Router} from "@angular/router";
import {LogInService} from "../../../Services/LogInService";
import {EtudiantService} from "../../../Services/EtudiantService";

@Component({
  selector: 'app-details-etudiant',
  templateUrl: './details-etudiant.component.html',
  styleUrls: ['./details-etudiant.component.scss']
})
export class DetailsEtudiantComponent implements OnInit {
  etudiant = <Etudiant>{};

  constructor(private router: Router,
              private logInService: LogInService,
              private etudiantService: EtudiantService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    if (!this.logInService.isConnected) {
      this.router.navigate(['login'])
    }
    if (this.route.snapshot.queryParams["numEtudiant"]) {
      let id: number = <number>this.route.snapshot.queryParams["numEtudiant"];
      this.etudiantService.getEtudiantById(id).subscribe((value => {
        this.etudiant = value;
      }));

    }

  }
}
