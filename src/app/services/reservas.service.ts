import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  constructor( public peticion: HttpClient ) { }

  getReservas(): Observable<any> {
    return this.peticion.get("https://apinick.herokuapp.com/hotelesnick/reservas");
  }
}
