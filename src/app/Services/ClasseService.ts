import {Injectable} from '@angular/core';
import {catchError, Observable, throwError} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Classe} from "../Models/Classe";
import {Services} from "./Services";

@Injectable({
  providedIn: 'root'
})
export class ClasseService extends Services {
  url = "http://localhost:8080/classe";
  SLASH = "/";

  constructor(private http: HttpClient) {
    super();
  }

  getAllClasses(): Observable<Array<Classe>> {
    return this.http.get<Array<Classe>>(this.url + this.SLASH + "all").pipe(
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
