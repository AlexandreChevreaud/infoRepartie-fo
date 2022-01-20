import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {Specialite} from "../Models/Specialite";
import {Services} from "./Services";

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService extends Services {
  url = "http://localhost:8080/specialite";
  SLASH = "/";

  constructor(private http: HttpClient) {
    super();
  }

  getAllSpecialite(): Observable<Array<Specialite>> {
    return this.http.get<Array<Specialite>>(this.url + this.SLASH + "all").pipe(
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
