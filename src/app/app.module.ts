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
import { NavbarComponent } from './component/navbar/navbar.component';
import { FooterComponent } from './component/footer/footer.component';
import { MenuPrincipalComponent } from './component/menu-principal/menu-principal.component';
@NgModule({
  declarations: [
    AppComponent,
    PersonajesComponent,
    ObtenerPersonajeComponent,
    NavbarComponent,
    FooterComponent,
    MenuPrincipalComponent
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
