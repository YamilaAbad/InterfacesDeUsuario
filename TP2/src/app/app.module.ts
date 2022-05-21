import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BotonNeonComponent } from './componentes/boton-neon/boton-neon.component';
import { AvatarUserComponent } from './componentes/avatar-user/avatar-user.component';

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    BotonNeonComponent,
    AvatarUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
