import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/domain/cliente';

@Component({
  selector: 'app-crearcliente',
  templateUrl: './crearcliente.component.html',
  styleUrls: ['./crearcliente.component.scss']
})
export class CrearclienteComponent {

  cliente: Cliente = new Cliente

  constructor(private clienteService : ClienteService, private router: Router){
      let params = this.router.getCurrentNavigation()?.extras.queryParams
      if(params){
        console.log(params)
        this.cliente = params['clienteToEdit']
      }


  }

  save(){
    console.log(this.cliente)
    this.clienteService.save(this.cliente).subscribe(data =>{
      console.log("resultado WS save", data)
    })
    this.cliente = new Cliente
    this.router.navigate(["pagina/listacliente"])
  }


}
