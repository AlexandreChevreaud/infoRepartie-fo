import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogInService {

  isConnected = true;
  isProfesseur = false;

  urlEtudiant = "http://localhost:8080/etudiant";
  urlProf = "http://localhost:8080/prof";
  SLASH = "/";

  constructor(private http: HttpClient,) {
  }

  isEtudiantExistant(login: string, mdp: string): Observable<boolean> {
    return this.http.get<boolean>(this.urlEtudiant + "/existant" + this.SLASH + login + this.SLASH + mdp);
  }

  isProfesseurExistant(login: string, mdp: string): Observable<boolean> {
    return this.http.get<boolean>(this.urlProf + "/existant" + this.SLASH + login + this.SLASH + mdp);
  }
}
