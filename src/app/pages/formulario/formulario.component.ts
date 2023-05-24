import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';
import { Usuario } from 'src/domain/usuario';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  nombre= 'Clear me';
  edad='0'

  usuario:Usuario=new Usuario();

  constructor(private usuarioService: UsuarioService,
    private router: Router) {
  
      let params = this.router.getCurrentNavigation()?.extras.queryParams;
      if(params){
        console.log(params)
        this.usuario= new Usuario()
        this.usuario = params['usuario']
      }
    }
  
  
    guardar(){
      console.log(this.usuario)
      this.usuarioService.save(this.usuario)
      this.usuario= new Usuario()
  
     this.router.navigate(["pagina/lista"]);
  
  
    }

    actualizar(){
      console.log(this.usuario)
      this.usuario= new Usuario()
      this.router.navigate(["pagina/lista"]);
    }




}
