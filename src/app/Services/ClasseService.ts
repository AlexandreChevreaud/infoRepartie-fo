import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Classe} from "../Models/Classe";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  url = "http://localhost:8080/classe";
  SLASH = "/";

  constructor(private http: HttpClient) {
  }

  getAllClasses(): Observable<Array<Classe>> {
    return this.http.get<Array<Classe>>(this.url + this.SLASH + "all");
  }
}
