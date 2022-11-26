import { Component, OnInit } from '@angular/core';
import { HabitacionesService } from 'src/app/services/habitaciones.service';

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.scss']
})
export class HabitacionesComponent implements OnInit {
  public habitaciones: any[] = [];
  banner = false;




  constructor( public _habitaciones: HabitacionesService ) {
    _habitaciones.getHabitaciones()
    .subscribe( resp => {
      this.habitaciones = resp.datos
    })
  }

  ngOnInit(): void {
  }

}
