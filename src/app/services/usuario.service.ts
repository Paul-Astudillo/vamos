import { Injectable } from '@angular/core';
import { Usuario } from 'src/domain/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }


  Usuario :Usuario[]=[]

  

  save(usuario:Usuario){

    this.Usuario .push(usuario)
    
  }
  getlist(){
return this.Usuario

  }
}
