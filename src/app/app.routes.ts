import { Routes } from '@angular/router';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { CartaComponent } from './components/carta/carta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ProductoComponent } from './components/producto/producto.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

export const ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: 'carta', component: CartaComponent},
    {path: 'carrito', component: CarritoComponent},
    {path: 'buscar/:termino', component: BuscadorComponent},
    {path:'', pathMatch: 'full', redirectTo: 'inicio'},
    {path:'*', pathMatch: 'full', redirectTo: 'inicio'}
];