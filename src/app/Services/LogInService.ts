import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Injectable} from '@angular/core';
import {Services} from "./Services";

@Injectable({
  providedIn: 'root',
})
export class LogInService extends Services {

  login = "";
  isConnected = true;
  isProfesseur = true;

  urlEtudiant = "http://localhost:8080/etudiant";
  urlProf = "http://localhost:8080/prof";
  SLASH = "/";

  constructor(private http: HttpClient,) {
    super();
  }

  isEtudiantExistant(login: string, mdp: string): Observable<boolean> {
    return this.http.get<boolean>(this.urlEtudiant + "/existant" + this.SLASH + login + this.SLASH + mdp).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }

        return throwError(errorMsg);
      }));
  }

  isProfesseurExistant(login: string, mdp: string): Observable<boolean> {
    return this.http.get<boolean>(this.urlProf + "/existant" + this.SLASH + login + this.SLASH + mdp).pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = this.getServerErrorMessage(error);
        }

        return throwError(errorMsg);
      }));
  }
}
