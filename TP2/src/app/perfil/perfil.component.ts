import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  opciones: string[];
  load: boolean;
 /*  info: boolean;*/
  mostrar: boolean 
  
  constructor() { 
    this.opciones = ['Favoritos ❤️','Historial de partidas','Ultimos jugados'];
    this.load = false;
    /* this.info = false;*/
    this.mostrar = false; 
  }

  ngOnInit(): void {
  
    
  }

}


