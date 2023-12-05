import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sprite-card',
  templateUrl: './sprite-card.component.html',
  styleUrls: ['./sprite-card.component.css']
})
export class SpriteCardComponent implements OnInit{
    constructor(){}
    ngOnInit(): void {
    }
    
    @Input()
    titulo:string = "";

    @Input()
    sprite:string = "";
}
