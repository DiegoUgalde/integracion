import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Moment } from 'moment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: ['./navbar.component.css']
})


export class NavbarComponent   {

  selected: {start: Moment, end: Moment};


  constructor(public auth: AuthService) {
    auth.handleAuthentication();

  }

  login() {
  this.auth.login();
  }

  salir() {
    this.auth.logout();
  }

}

