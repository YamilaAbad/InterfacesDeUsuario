import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';
import { Juego } from './Juego';
@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css']
})
export class JuegoComponent implements OnInit {
  juego: Juego[]=[
    {
      votos:1500,
    },
  ];
  constructor(private _cargarScripts: CargarScriptsService) { 
            _cargarScripts.carga(["heartAnimacion"])
  }

  ngOnInit(): void {
  }

}
