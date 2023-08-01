import { Component } from '@angular/core';
import { Usuario } from 'src/app/Model/modelUsuario';
import { ServiceAllService } from 'src/app/Services/service-all.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Endpoint } from 'src/app/Enums/Endpoints';



@Component({
  selector: 'app-usuario-excluir',
  templateUrl: './usuario-excluir.component.html',
  styleUrls: ['./usuario-excluir.component.css']
})
export class UsuarioExcluirComponent {

  usuario! : Usuario

  constructor(
    private serviceUsuario : ServiceAllService<Usuario>,
    private route : ActivatedRoute,
    private rota : Router
  ){ }

  ngOnInit(){
      this.BuscarUsuario()
    }

  BuscarUsuario(){
   
    this.serviceUsuario.BuscarPorId(this.route.snapshot.params['id'], Endpoint.Usuario).subscribe(x => {
      this.usuario = x

    })
    
  }

  Excluir(){
    this.serviceUsuario.Excluir(this.usuario.id, Endpoint.Usuario).subscribe(() => {
      this.serviceUsuario.showMessage("Usuário Excluido com sucesso!", false);
    this.rota.navigate(['usuario'])
    })
    
  }



}
