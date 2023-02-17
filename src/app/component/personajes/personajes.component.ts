import { Component, OnInit } from '@angular/core';

import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss']
})
export class PersonajesComponent {

  public personajes: any = {}

  constructor(private service: PersonajesService){}

  ngOnInit():void{
    this.service.getAllPersonajes().subscribe(resp => {
      this.personajes = resp.results;
    });
  }

}
