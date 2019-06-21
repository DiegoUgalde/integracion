import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';
import { Reserva } from '../components/model/reserva';


@Injectable({
  providedIn: 'root'
})

export class ReservaService {

  url =  environment.URL_API;
  apiUrl = 'http://mindicador.cl/api/dolar';
  constructor(
    // tslint:disable-next-line:variable-name
    private http: Http
  ) {

  }



  getReserva() {
   return this.http.get(this.url + 'reserva').map(res => res.json() );
  }

  getReservaId(id : string){
    return this.http.get(this.url + 'reserva/' + id).map(res => res.json());
  }


  addReserva(reserva: Reserva) {
    // tslint:disable-next-line:prefer-const
    let json = JSON.stringify(reserva);
    // tslint:disable-next-line:prefer-const
    let params = 'json=' + json;
    // tslint:disable-next-line:prefer-const
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});

    return this.http.post(this.url + 'reserva', params, {headers})
    .map(res => res.json());
  }

  editReserva(id : string, reserva : Reserva){
    let json = JSON.stringify(reserva);
    let params = 'json=' + json;
    let headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    return this.http.post(this.url + '/update-reserva/' + id , params , {headers: headers})
    .map(res => res.json());
  }

  eliminarReserva(id: string){
    return this.http.get(this.url + 'delete-reserva/' + id).map(res => res.json());
  }

  

}
