import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';
import { CartaComponent } from './components/carta/carta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ROUTES } from './app.routes';
import { SlideshowComponent } from './components/slideshow/slideshow.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

//Angular material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MapaComponent } from './components/mapa/mapa.component';
import { MatCardModule } from '@angular/material/card';
import { AgmCoreModule } from '@agm/core';
import { ProductoComponent } from './components/producto/producto.component';

//Servicios
import { ProductosService } from './productos.service';
import { BuscadorComponent } from './components/buscador/buscador.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    UbicacionComponent,
    CartaComponent,
    NavbarComponent,
    SlideshowComponent,
    MapaComponent,
    ProductoComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    AgmCoreModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBUZ984y-uy8Wc5IGCo3wpOwPuHdrMptCI'
    }),
    HttpClientModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
