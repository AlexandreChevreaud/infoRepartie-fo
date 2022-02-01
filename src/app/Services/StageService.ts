import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stage} from "../Models/Stage";
import {catchError, Observable, throwError} from "rxjs";
import {Services} from "./Services";

@Injectable({
  providedIn: 'root'
})
export class StageService extends Services {
  url = "http://localhost:8080/stage";
  SLASH = "/";

  constructor(private http: HttpClient) {
    super();
  }

  createStage(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(this.url + this.SLASH + "create", stage).pipe(
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

  getStageByNumEntreprise(id: number): Observable<Array<Stage>> {
    return this.http.get<Array<Stage>>(this.url + this.SLASH + "bynumentreprise" + this.SLASH + id).pipe(
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

  getStage(id: number): Observable<Stage> {
    return this.http.get<Stage>(this.url + this.SLASH + id).pipe(
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

  getAllStages(): Observable<Array<Stage>> {
    return this.http.get<Array<Stage>>(this.url + this.SLASH + "all").pipe(
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
