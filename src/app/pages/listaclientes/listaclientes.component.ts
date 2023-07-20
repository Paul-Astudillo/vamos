import { Component } from '@angular/core';
import { NavigationExtras, Route, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/domain/cliente';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.scss']
})
export class ListaclientesComponent {
  listaClientes:any

  constructor(private clienteService: ClienteService, private router: Router){
   this.listaClientes = this.clienteService.getAll()
  }


  editar(cliente : Cliente){
      console.log("Editar cliente: "+cliente.cedula)

      let params: NavigationExtras = {
       queryParams:{
         clienteToEdit : cliente
       }
      }

      this.router.navigate(['pagina/crearcliente'], params)
  }


  eliminar(cliente : Cliente){
     console.log("eliminar cliente")
     this.clienteService.delete(cliente).subscribe(
       () => console.log("cliente eliminado")
     )

     this.reloadPage()
  }

  reloadPage(){
   let currentUrl = this.router.url
   this.router.navigateByUrl("/", {skipLocationChange: true}).then(
     () =>{
       this.router.navigate([currentUrl])
     }
   )
  }


}
