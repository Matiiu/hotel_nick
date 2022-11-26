import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./scss/home.component.scss']
})
export class HomeComponent implements OnInit {
  platos: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  valor: any = 0;

  constructor( ) {

  }

  ngOnInit(): void {

  }

  openModal() {
      let modal = document.querySelector('dialog')
      modal?.showModal()
  }

  closeModal() {
    let modal = document.querySelector('dialog')
    modal?.close()

}
  saveValor(valor: any) {
    this.valor = valor;
  }

  nextPhoto() {
    this.valor ++
    if (this.valor > 10) {
      this.valor = 1
    }
  }

  returnPhoto() {
    this.valor --
    if (this.valor < 1 ) {
      this.valor = 10
    }
  }




}
