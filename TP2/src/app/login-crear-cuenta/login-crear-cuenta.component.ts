import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegister } from '../servicios/registro-usuario.service';
import { LoginServisService } from '../servicios/login-servis.service';
import { registerLocaleData } from '@angular/common';
@Component({
  selector: 'app-login-crear-cuenta',
  templateUrl: './login-crear-cuenta.component.html',
  styleUrls: ['./login-crear-cuenta.component.css']
})
export class LoginCrearCuentaComponent implements OnInit {
/*   user: UserRegister;
  confirmacionPass: string = "";
  visible: boolean = false;  */
  constructor(
  /*   private router: Router,
    private loginServis: LoginServisService  */
    ) {}/* {
      this.user={
        username: "",
        email: "",
        password: "",
      };
    }
    
    registro(e: any){
      e.preventDefault();
    
    if(this.user.password==this.confirmacionPass){
      setTimeout(() => {
        this.loginServis.registro(this.user);
        this.router.navigate(['/']);
      },1000);
    }else console.log("Not fount");
   
  }
  toggleShow():void{
    this.visible=!this.visible;
  } */
  ngOnInit(): void{}
}

/*****REGISTRO DEL USUARIO- FALTA BACKEND*******/
