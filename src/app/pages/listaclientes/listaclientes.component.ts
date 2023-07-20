import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-listaclientes',
  templateUrl: './listaclientes.component.html',
  styleUrls: ['./listaclientes.component.scss']
})
export class ListaclientesComponent {

  listaclientes:any;

  constructor (private clienteservice:ClienteService, private router:Router){
    
  }

}
