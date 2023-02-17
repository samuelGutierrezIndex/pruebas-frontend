import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerPersonajesService {

  URL_SERVICE: string = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getASingleCharacter(): Observable<any>{
    return this.http.get(this.URL_SERVICE);
  }

}
