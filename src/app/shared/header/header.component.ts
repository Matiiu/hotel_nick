import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./scss/header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  public banner: boolean = false;

  constructor() {
    this.banner = true
   }

  ngOnInit(): void {
  }

  toogleTag() {
    this.showMenu = !this.showMenu;
  }

}
