import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Entreprise} from "../Models/Entreprise";
import {EntrepriseAndSpec} from "../Models/Input/EntrepriseAndSpec";
import {Services} from "./Services";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService extends Services {
  url = "http://localhost:8080/entreprise";
  SLASH = "/";

  constructor(private http: HttpClient) {
    super();
  }

  getAllEntreprises(): Observable<Array<Entreprise>> {
    return this.http.get<Array<Entreprise>>(this.url + this.SLASH + "all").pipe(
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

  getEntrepriseAndSpecById(id: number): Observable<EntrepriseAndSpec> {
    return this.http.get<EntrepriseAndSpec>(this.url + this.SLASH + id).pipe(
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

  createEntreprise(ent: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.url + this.SLASH + "create", ent).pipe(
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

  deleteEntreprise(id: number): Observable<number> {
    return this.http.delete<number>(this.url + this.SLASH + id).pipe(
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
