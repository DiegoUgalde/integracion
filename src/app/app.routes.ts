import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { ViajesComponent } from './components/viajes/viajes.component';
import { VistareservaComponent } from './components/vistareserva/vistareserva.component';

import { AuthGuardService } from './services/auth-guard.service';
import { ReservaComponent } from './components/reserva/reserva.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const APP_ROUTES: Routes = [
    {path: 'home' , component: HomeComponent},
    {path: 'viajes' , component: ViajesComponent},
    {path: 'reserva' , component: ReservaComponent},
    {path: 'piezas' , component: RoomsComponent},
    {path: 'protegida/vistaReserva/:id' , component: VistareservaComponent},
    {path: 'protegida' , component: ProtegidaComponent, canActivate: [ AuthGuardService ]},
    {path: '**' , pathMatch: 'full' , redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
