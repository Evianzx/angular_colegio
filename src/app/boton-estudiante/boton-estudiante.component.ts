import { Component } from '@angular/core';
import { ApiColegioService } from '../api-colegio.service';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-boton-docente',
  templateUrl: './boton-estudiante.component.html',
  styleUrls: ['./boton-estudiante.component.css']
})
export class BotonEstudianteComponent {

  idP = 0;

  countries: any = [];
  constructor(private _apiColegio: ApiColegioService, private modalService: NgbActiveModal) {
    this.ApiColegio();
  }
  ApiColegio() {
    this._apiColegio.ObtenerEstudiante().subscribe(rest => {
      this.countries = rest;
      console.log(this.countries);
    })
  }

  save() {
    this.salir(this.idP);
  }

  salir(data: any = undefined) {
    this.modalService.dismiss(data);
  }

}
