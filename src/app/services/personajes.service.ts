import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  URL_PERSONAJES: any = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient ) {}

  public getAllPersonajes(): Observable<any>{
    return this.http.get(this.URL_PERSONAJES);
  }

}
