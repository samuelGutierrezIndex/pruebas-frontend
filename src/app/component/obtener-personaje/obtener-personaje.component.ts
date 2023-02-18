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

  constructor(private service: ObtenerPersonajesService) { }

  ngOnInit(): void {
    this.service.getASingleCharacter().subscribe(resp => {
      this.personajes = resp.results;

    })
  }

  public bandera: boolean = false;
  getMostrar(id: any) {
    if (this.textValido) {
      this.item = this.personajes[id - 1];
      console.log(this.item);
      this.bandera = true;
    } else {
      if (this.textValido && id == 0) {
        alert("Debe ingresar una opcion valida")
      }

    }
  }

  public textValido: boolean = false;
  validarTexto(text: string) {
    this.textValido = !!text;
  }

}
