import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Etudiant} from "../Models/Etudiant";
import {Services} from "./Services";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService extends Services {
  url = "http://localhost:8080/etudiant";
  SLASH = "/";

  constructor(private http: HttpClient) {
    super();
  }

  getAllEtudiant(): Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>(this.url + this.SLASH + "all").pipe(
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

  createEtudiant(etu: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.url + this.SLASH, etu).pipe(
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

  deleteEtudiant(id: number) {
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
