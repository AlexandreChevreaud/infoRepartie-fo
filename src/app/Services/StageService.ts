import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stage} from "../Models/Stage";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StageService {
  url = "http://localhost:8080/stage";
  SLASH = "/";

  constructor(private http: HttpClient) {

  }

  createStage(stage: Stage): Observable<Stage> {
    return this.http.post<Stage>(this.url + this.SLASH + "create", stage);
  }

  getStageByNumEntreprise(id: number): Observable<Array<Stage>> {
    return this.http.get<Array<Stage>>(this.url + this.SLASH + "bynumentreprise" + this.SLASH + id);
  }

  getStage(id: number): Observable<Stage> {
    return this.http.get<Stage>(this.url + this.SLASH + id);
  }
}
