import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Professeur} from "../Models/Professeur";

@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  url = "http://localhost:8080/prof";
  SLASH = "/";

  constructor(private http: HttpClient) {

  }

  getAllProf(): Observable<Array<Professeur>> {
    return this.http.get<Array<Professeur>>(this.url + this.SLASH + "all");
  }
}
