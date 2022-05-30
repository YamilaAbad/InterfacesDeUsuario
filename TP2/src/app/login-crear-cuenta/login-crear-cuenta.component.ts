import { Component, OnInit } from '@angular/core';
import { CargarScriptsService } from '../cargar-scripts.service';
@Component({
  selector: 'app-login-crear-cuenta',
  templateUrl: './login-crear-cuenta.component.html',
  styleUrls: ['./login-crear-cuenta.component.css']
})
export class LoginCrearCuentaComponent implements OnInit {
 
  constructor(private _cargarScripts: CargarScriptsService) { 
    _cargarScripts.carga(["cargaDePagina"])
  }


  ngOnInit(): void {
  }

}
