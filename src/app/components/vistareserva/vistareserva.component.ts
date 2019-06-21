import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../model/reserva';
import axios from 'axios';
import qs from 'qs';

@Component({
  selector: 'app-vistareserva',
  templateUrl: './vistareserva.component.html',
})
export class VistareservaComponent implements OnInit {

  public reserva:Reserva;
  selected = 'all';

  constructor(
    private _activateRoute:ActivatedRoute,
    private _reservaService : ReservaService
    ) { 

    this._activateRoute.params.subscribe( params =>{
      console.log(params['id']);
    })
  }

  ngOnInit() {
    this.getProudctosId();
  }

  getProudctosId(){
    this._activateRoute.params.forEach((params : Params)=>{
      let id = params['id'];
      
      this._reservaService.getReservaId(id).subscribe(
        response => {
          if(response.code == 200){
            this.reserva = response.data;
          }
        },
        error =>{
          console.log(<any>error)
        }
      );
    })
  }

   onSubmit() {
    let id = '';
    this._activateRoute.params.forEach((params : Params)=>{
       id = params['id']
    });

    axios.post(`/update-reserva/${id}`, qs.stringify({
      'total' : this.reserva.total,
      'fecha' :  this.reserva.fecha,
      'id_habitacion' : this.reserva.id_habitacion,
      'id_usuario' : this.reserva.id_usuario,
      'dias' : this.reserva.dias}),{headers : {'Content-Type' :'application/x-www-form-urlencoded'}}
    ).then( function (response) {
      console.log("del then" , response);
    }).catch(function (error) {
      console.log("del cacth" , error);
    });
  }
}
