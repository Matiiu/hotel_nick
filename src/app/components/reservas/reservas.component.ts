import { Component, OnInit } from '@angular/core';
import { ReservasService } from 'src/app/services/reservas.service';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.scss']
})
export class ReservasComponent implements OnInit {
  public reservas: any[] = [];

  constructor( public _reservas: ReservasService ) {
    _reservas.getReservas()
    .subscribe( resp => {
      this.reservas = resp.datos
    })
  }

  ngOnInit(): void {
  }

}
