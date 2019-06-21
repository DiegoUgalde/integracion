import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../../services/reserva.service';
import { Reserva } from '../model/reserva';
import { AuthService} from '../../services/auth.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {
  modalRef: BsModalRef;
  id : string;
  public reservas: Reserva[];
  profile: any;

  constructor(
    private modalService: BsModalService,
    private auth: AuthService, 
    private reservaService: ReservaService,
    private _modalService: NgbModal,
    private _activateRoute: ActivatedRoute
    ) 
    { 
      
    }

  
  openVerticallyCentered(content) {
    this._modalService.open(content, { centered: true });
  }

  ngOnInit() {
        {
          if (this.auth.userProfile) {
            this.profile = this.auth.userProfile;
          } else {
            this.auth.getProfile((err, profile) => {
              this.profile = profile;
              console.log(this.profile);
            });
          }
          this.reservaService.getReserva().subscribe(
            result => {
             this.reservas = result.data;
             console.log('datos de reserva' , this.reservas);
            } ,
            error => {
              console.log(error as any);
            }
          );
      }
    }

    eliminarReserva(id){
        this.id = id
          this.reservaService.eliminarReserva(id).subscribe(
          response => {
            if(response.code == 200){
              this.reservas = response.data;
              this.reservaService.getReserva().subscribe(
                result => {
                 this.reservas = result.data;
                 console.log('datos de reserva' , this.reservas);
                } ,
                error => {
                  console.log(error as any);
                }
              );
            }
          },
          error =>{
            console.log(<any>error)
          }
        );
      }


    confirm(id): void {
      console.log(id)
      this.eliminarReserva(id);
      this.modalRef.hide();
    }
   
    decline(): void {
      this.modalRef.hide();
    }

    openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(
        template,
        Object.assign({}, { class: 'gray modal-lg' })
      );
    }
}
