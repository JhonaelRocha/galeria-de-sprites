import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})



export class MenuComponent {
    constructor(){

    }
    MostrarMenuLateral(){
        const menuLateralPainel = document.querySelector(".menu-lateral-painel");
        menuLateralPainel?.classList.remove("invisible");
        menuLateralPainel?.classList.add("visible");
    }
    EsconderMenuLateral(){
        const menuLateralPainel = document.querySelector(".menu-lateral-painel");
        menuLateralPainel?.classList.remove("visible");
        menuLateralPainel?.classList.add("invisible");
    }
}
