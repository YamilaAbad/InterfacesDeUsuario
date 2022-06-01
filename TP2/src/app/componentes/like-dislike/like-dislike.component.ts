import { Component, Input, OnInit } from '@angular/core';
import { Juego } from 'src/app/juego/Juego';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrls: ['./like-dislike.component.css']
})
export class LikeDislikeComponent implements OnInit {

  constructor() { }

  @Input()
  juego!:Juego;
  ngOnInit(): void {
  }

  restarVoto(juego: Juego): void{
    juego.votos--;
  }
  sumarVoto(juego: Juego):void{
    juego.votos++;
  }

}
