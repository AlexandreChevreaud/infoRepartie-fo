import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {SpecEntreprise} from "../Models/SpecEntreprise";

@Injectable({
  providedIn: 'root'
})
export class SpecEntrepriseService {
  url = "http://localhost:8080/specEntreprise";
  SLASH = "/";

  constructor(private http: HttpClient) {
  }

  getAllSpecEnterprise(): Observable<Array<SpecEntreprise>> {
    return this.http.get<Array<SpecEntreprise>>(this.url + this.SLASH + "all");
  }
}
