import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Etudiant} from "../Models/Etudiant";

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  url = "http://localhost:8080/etudiant";
  SLASH = "/";

  constructor(private http: HttpClient) {
  }

  getAllEtudiant(): Observable<Array<Etudiant>> {
    return this.http.get<Array<Etudiant>>(this.url + this.SLASH + "all");
  }
}
