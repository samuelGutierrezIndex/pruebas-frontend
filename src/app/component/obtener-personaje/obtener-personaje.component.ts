import { Component, OnInit } from '@angular/core';

import { ObtenerPersonajesService } from '../../services/obtener-personajes.service';

@Component({
  selector: 'app-obtener-personaje',
  templateUrl: './obtener-personaje.component.html',
  styleUrls: ['./obtener-personaje.component.scss']
})
export class ObtenerPersonajeComponent {

  public personajes: any = {};

  public item: any = {};

  id: any;

  constructor( private service: ObtenerPersonajesService){

  }

  ngOnInit():void{
    this.service.getASingleCharacter().subscribe(resp =>{
      this.personajes = resp.results;
      
    })
  }

  getMostrar(id: any){
    this.item = this.personajes[id-1];
    console.log(this.item);
  }

}
