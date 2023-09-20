
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiColegioService {
  private apiUrl = 'https://localhost:7102/api/Asignatura';
  private apiUrl2 = 'https://localhost:7102/api/Docente';
  private apiUrl3 = 'https://localhost:7102/api/EstudianteControlador'

  constructor(private http: HttpClient) { }
  obtenerDatos(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/`);
  }
  ObtenerDocente(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl2}/`);

  }
  obtenerDatos2(body: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/`, body);
  }
  ObtenerEstudiante(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl3}/`);


  }
}
