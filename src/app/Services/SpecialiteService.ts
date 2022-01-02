import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Specialite} from "../Models/Specialite";

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {
  url = "http://localhost:8080/specialite";
  SLASH = "/";

  constructor(private http: HttpClient) {
  }

  getAllSpecialite(): Observable<Array<Specialite>> {
    return this.http.get<Array<Specialite>>(this.url + this.SLASH + "all");
  }


}
