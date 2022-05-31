import { Injectable } from '@angular/core';
import { UserLogin } from './logeo-usuario.service';
import { UserRegister } from './registro-usuario.service';
import { UserLogged } from './usuario-logueado.service';

@Injectable({
  providedIn: 'root'
})
export class LoginServisService {
  private user?:UserLogged;

  constructor() { }

  sgiIn(user: UserLogin): boolean{
    this.user = {
      username: "Restt",
      email: user.email,
    }
    return true;
  }

  registro(user: UserRegister): boolean{
    this.sgiIn(user);
    return true;
  }

  logOut(): void{
    this.user= undefined;
  }

  logIn():boolean{
    return this.user != undefined;
  }

  getUser():UserLogged{
    return this.user!;
  }
}
