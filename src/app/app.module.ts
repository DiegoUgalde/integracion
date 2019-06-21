import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { APP_ROUTING } from './app.routes';
// servicios
import { AuthService } from './services/auth.service';
import { AuthGuardService } from './services/auth-guard.service';

import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ViajesComponent } from './components/viajes/viajes.component';
import { ProtegidaComponent } from './components/protegida/protegida.component';             
import { NgxDebounceClickModule } from '@ngx-lite/debounce-click';
import { ReservaComponent } from './components/reserva/reserva.component';
import { HttpModule } from '@angular/http';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { VistareservaComponent } from './components/vistareserva/vistareserva.component';
import { EliminarReservaComponent } from './components/eliminar-reserva/eliminar-reserva.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RoomsComponent } from './components/rooms/rooms.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import {SnackbarModule} from 'ngx-snackbar';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ViajesComponent,
    ProtegidaComponent,
    FooterComponent,
    ReservaComponent,
    VistareservaComponent,
    EliminarReservaComponent,
    RoomsComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDaterangepickerMd.forRoot(),
    NgxDebounceClickModule,
    AngularFontAwesomeModule,
    APP_ROUTING,
    ModalModule.forRoot(),
    SnackbarModule.forRoot()
  ],
  providers: [AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
