import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './Componentes/usuario/usuario.component';
import { HomeComponent } from './Menu/home/home.component';
import { UsuarioCadastroComponent } from './Componentes/usuario/usuario-cadastro/usuario-cadastro.component';
import { UsuarioAtualizarComponent } from './Componentes/usuario/usuario-atualizar/usuario-atualizar.component';
import { UsuarioExcluirComponent } from './Componentes/usuario/usuario-excluir/usuario-excluir.component';

const routes: Routes = [
  {path:'', component: Component},
  {path:'usuario', component: UsuarioComponent},
  {path:'cadastrousuario', component: UsuarioCadastroComponent},
  {path:'atualizarusuario/:id', component: UsuarioAtualizarComponent},
  {path:'excluirusuario/:id', component: UsuarioExcluirComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
