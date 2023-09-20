import { Component } from '@angular/core';
import { ApiColegioService } from './api-colegio.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BotonDocenteComponent } from './boton-docente/boton-docente.component';
import { BotonEstudianteComponent } from './boton-estudiante/boton-estudiante.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'vista-colegio-angular';
  countries: any = [];
  constructor(private _apiColegio: ApiColegioService, private modalService: NgbModal) {
    this.ApiColegio();
  }
  ApiColegio() {
    this._apiColegio.obtenerDatos().subscribe(rest => {
      this.countries = rest;
      console.log(this.countries);
    })



  }

  openbutton(item: any) {
    const modalRef = this.modalService.open(BotonDocenteComponent, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.dismissed.subscribe(res => {
      if (res) {
        const data = {
          "id": item.id,
          "nombre": item.nombre,
          "Docente_idDocente": res,
          "curso_id": item.curso_id
        }
        this._apiColegio.obtenerDatos2(data).subscribe(result => { alert("DOCENTE QUEDO INSCRITO") });
        console.log(res, item.id);
      }
    })
  }
  openbutton2(item: any) {
    const modalRef = this.modalService.open(BotonEstudianteComponent, { ariaLabelledBy: 'modal-basic-title' });
    modalRef.dismissed.subscribe(res => {
      if (res) {
        /*       const data = {
                "id": item.id,
                "nombre": item.nombre,
                "Docente_idDocente": res,
                "curso_id": item.curso_id
              }
              this._apiColegio.obtenerDatos2(data).subscribe(result => { alert("estudiante inscrito") }); */
        console.log(res, item.id);
      }
    })
  }

}
