import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { CartaComponent } from './components/carta/carta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';

//Importar Rutas



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicacionComponent,
    CartaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
