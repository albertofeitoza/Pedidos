import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Endpoint } from 'src/app/Enums/Endpoints';
import { Usuario } from 'src/app/Model/modelUsuario';
import { ServiceAllService } from 'src/app/Services/service-all.service';

@Component({
  selector: 'app-usuario-atualizar',
  templateUrl: './usuario-atualizar.component.html',
  styleUrls: ['./usuario-atualizar.component.css']
})
export class UsuarioAtualizarComponent {

  usuario! : Usuario


  constructor(
    private serviceUsuario : ServiceAllService<Usuario>,
    private routeActive : ActivatedRoute,
    private route : Router

  ){

  }

  ngOnInit(){
    this.BuscarUsuario()
  }

  BuscarUsuario(){
    
    this.serviceUsuario.BuscarPorId(this.routeActive.snapshot.params['id'], Endpoint.Usuario)
      .subscribe(x =>{
        this.usuario = x
      })
  }



  Atualizar(){
    this.serviceUsuario.Atualizar(this.usuario,Endpoint.Usuario)
      .subscribe(x => {
        this.serviceUsuario.showMessage("Usuário atualizado com sucesso!")
        this.route.navigate(['usuario']);

      })
  }

}
