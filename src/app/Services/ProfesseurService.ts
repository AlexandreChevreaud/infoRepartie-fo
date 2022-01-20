import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Professeur} from "../Models/Professeur";
import {Services} from "./Services";

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService extends Services {
  url = "http://localhost:8080/prof";
  SLASH = "/";

  constructor(private http: HttpClient) {
    super();
  }

  getAllProf(): Observable<Array<Professeur>> {
    return this.http.get<Array<Professeur>>(this.url + this.SLASH + "all").pipe(
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
