import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  inicioSesiones: string[] ;
  constructor() {
    this.inicioSesiones = ['Iniciar Sesión','Iniciar Sesion con Facebook']; 
  }
    
  ngOnInit(): void {
  }

}
