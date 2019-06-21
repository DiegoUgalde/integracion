import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../model/reserva';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormBuilder , FormGroup } from '@angular/forms';
import { Http , Headers} from '@angular/http';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import qs from 'qs';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css'],
})

export class ReservaComponent implements OnInit {

  forma: FormGroup;
  formaData: FormData;
  url =  environment.URL_API;
  // public reservas: Reserva[];
  contadorPasajes = 0;
  precioPasajesSantiago = 0;
  precioPasajeViña = 0;

    reserva: Reserva = {
     total : 15000,
     fecha : '',
     id_habitacion : 0,
     id_usuario : 0,
     dias : 0
  }



  environment: any;
  constructor(
    public reservaService: ReservaService,
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    // tslint:disable-next-line:variable-name
    private _router: Router,
    private fb: FormBuilder,
    private http: Http
  ) {
 
  }

  ngOnInit() {


  }

  // tslint:disable-next-line:no-shadowed-variable
  onSubmit() {

    console.log(this.reserva);
    
    axios.post('/reserva', qs.stringify({
      'total' : this.reserva.total,
      'fecha' :  this.reserva.fecha,
      'id_habitacion' : this.reserva.id_habitacion,
      'id_usuario' : this.reserva.id_usuario,
      'dias' : this.reserva.dias}),{headers : {'Content-Type' :'application/x-www-form-urlencoded'}}
    ).then( function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
    console.log(this._router.navigateByUrl('http://localhost:8080/apihoteleria/response.php'));



    // const headers = new Headers({'Content-Type': 'application/x-www-form-urlencoded'});
    // this.http.post(this.url + 'reserva', this.forma.value , {headers}).subscribe(res => {

    //   console.log(this.forma.value);
    //   console.log(res);

    // });
  }



  // const formData = new FormData();
  // formData.append('date',  this.forma.get('fecha').value);
  // console.log(formData);
  // this.http.post(this.url + 'reserva', formData).subscribe(
  //   (res) => console.log(res),
  //   (err) => console.log(err)
  // );
  // console.log(this.reservas);

  // this.reservaService.addReserva(this.reserva1).subscribe(
  //   response => {

  //   },
  //   error =>{
  //     console.log('fallo');
  //   }
  // );
}
