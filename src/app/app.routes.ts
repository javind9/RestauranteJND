import { Routes } from '@angular/router';
import { CartaComponent } from './components/carta/carta.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UbicacionComponent } from './components/ubicacion/ubicacion.component';

export const ROUTES: Routes = [
    {path: 'inicio', component: InicioComponent},
    {path: 'ubicacion', component: UbicacionComponent},
    {path: 'carta', component: CartaComponent},
    {path:'', pathMatch: 'full', redirectTo: 'inicio'},
    {path:'*', pathMatch: 'full', redirectTo: 'inicio'}
];