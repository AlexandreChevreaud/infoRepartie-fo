import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Entreprise} from "../Models/Entreprise";

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  url = "http://localhost:8080/entreprise";
  SLASH = "/";

  constructor(private http: HttpClient) {
  }

  getAllEntreprises(): Observable<Array<Entreprise>> {
    return this.http.get<Array<Entreprise>>(this.url + this.SLASH + "all");
  }
}
