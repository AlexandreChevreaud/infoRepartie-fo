import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {SpecEntreprise} from "../Models/SpecEntreprise";
import {Services} from "./Services";

@Injectable({
  providedIn: 'root'
})
export class SpecEntrepriseService extends Services {
  url = "http://localhost:8080/specEntreprise";
  SLASH = "/";

  constructor(private http: HttpClient) {
    super();
  }

  getAllSpecEnterprise(): Observable<Array<SpecEntreprise>> {
    return this.http.get<Array<SpecEntreprise>>(this.url + this.SLASH + "all").pipe(
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

  createSpecEnterprise(spec: Array<SpecEntreprise>): Observable<Array<SpecEntreprise>> {
    return this.http.post<Array<SpecEntreprise>>(this.url + this.SLASH + "create", spec).pipe(
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
