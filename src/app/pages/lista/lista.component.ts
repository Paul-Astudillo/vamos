import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/domain/usuario';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent {

  listadoUsuarios: Usuario[] = [] 
  usuarioSelecionada: Usuario| null = null;
  
  constructor(usuarioServices:UsuarioService,private router: Router ) {
    this.listadoUsuarios = usuarioServices.getlist()
  }




  editar(usuario: Usuario){


    let params: NavigationExtras = {
      queryParams: {
        usuario: usuario,
        nombre: 'Usuario'
      }
    }
    this.router.navigate(["pagina/formulario"], params)

  
  }


  eliminar(usuario: Usuario) {
    for(let i = 0 ; i < this.listadoUsuarios.length ; i++){
      if(this.listadoUsuarios[i] === usuario){
        console.log("son iguales");
        this.listadoUsuarios.splice(i,1);
      }
    }
  }




}
