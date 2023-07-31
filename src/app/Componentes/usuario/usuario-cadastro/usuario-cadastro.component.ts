import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from 'src/app/Enums/Endpoints';
import { Usuario } from 'src/app/Model/modelUsuario';
import { ServiceAllService } from 'src/app/Services/service-all.service';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent {

usuario : Usuario = new Usuario()  


  constructor(
    private serviceUsuario : ServiceAllService<Usuario>,
    private route : Router
  )
  {
  }

  Cadastrar(){

  this.serviceUsuario.Cadastrar(this.usuario, Endpoint.Usuario).subscribe(() => {
    this.route.navigate(['usuario'])
  })  

  }
}
