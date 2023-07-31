import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Endpoint } from 'src/app/Enums/Endpoints';
import { Usuario } from 'src/app/Model/modelUsuario';
import { ServiceAllService } from 'src/app/Services/service-all.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css'],
})

export class UsuarioComponent implements OnInit{
  
  usuario : Usuario [] = [];
  idSelecionado : number = 0;
  ColunasGrid = ['id','nome','telefone', 'endereco', 'acoes' ]

  constructor(
    private serviceUsuario : ServiceAllService<Usuario>,
    private route : Router
 
  ){}
 

  ngOnInit() {
    this.BuscarTodos()
  }

  selecionaLinha(id : any){

  }

  BuscarTodos(){
    this.serviceUsuario.BuscarTodos(Endpoint.Usuario).subscribe(res => {
      this.usuario = res
    })
  }


}
