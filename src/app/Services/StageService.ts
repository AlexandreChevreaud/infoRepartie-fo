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
}
