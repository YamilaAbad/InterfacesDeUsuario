import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  opciones: string[];

  constructor() { 
    this.opciones = ['Favoritos ❤️','Historial de partidas','Ultimos jugados','Cancelar'];
  }

  ngOnInit(): void {
  }

}


