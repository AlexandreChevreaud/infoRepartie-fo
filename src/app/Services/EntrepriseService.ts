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

  getAllProf(): Observable<Array<Entreprise>> {
    return this.http.get<Array<Entreprise>>(this.url + this.SLASH + "all");
  }

  createEntreprise(ent: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.url + this.SLASH + "create", ent);
  }
}
