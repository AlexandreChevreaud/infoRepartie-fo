import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Entreprise} from "../Models/Entreprise";
import {EntrepriseAndSpec} from "../Models/Input/EntrepriseAndSpec";

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

  getEntrepriseAndSpecById(id: number): Observable<EntrepriseAndSpec> {
    return this.http.get<EntrepriseAndSpec>(this.url + this.SLASH + id);
  }

  createEntreprise(ent: Entreprise): Observable<Entreprise> {
    return this.http.post<Entreprise>(this.url + this.SLASH + "create", ent);
  }

  deleteEntreprise(id: number): Observable<number> {
    return this.http.delete<number>(this.url + this.SLASH + id);
  }
}
