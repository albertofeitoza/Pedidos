import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from  '@angular/common';


import { UsuarioComponent } from "./Componentes/usuario/usuario.component";
import { AppComponent } from "./app.component";

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { HomeComponent } from './Menu/home/home.component';
import { UsuarioCadastroComponent } from './Componentes/usuario/usuario-cadastro/usuario-cadastro.component';
import { ServiceAllService } from './Services/service-all.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UsuarioAtualizarComponent } from './Componentes/usuario/usuario-atualizar/usuario-atualizar.component';
import { UsuarioExcluirComponent } from './Componentes/usuario/usuario-excluir/usuario-excluir.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HomeComponent,
    UsuarioCadastroComponent,
    UsuarioAtualizarComponent,
    UsuarioExcluirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    FormsModule,
    MatSnackBarModule,
    HttpClientModule
    
  ],
  providers: 
  [
    ServiceAllService,
    {
    provide : LOCALE_ID,
    useValue : 'pt-BR',
    },
  [
    //LoginService,
  ],
 ],
  
  bootstrap: [AppComponent, HttpClient]
})
export class AppModule { }
