import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonajesComponent } from './component/personajes/personajes.component';
import { PersonajesService } from './services/personajes.service';
import { ObtenerPersonajesService } from './services/obtener-personajes.service';
import { HttpClientModule } from "@angular/common/http";
import { ObtenerPersonajeComponent } from './component/obtener-personaje/obtener-personaje.component';

import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    ObtenerPersonajeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [PersonajesService, ObtenerPersonajesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
