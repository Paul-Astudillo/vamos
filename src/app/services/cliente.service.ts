import { Injectable } from '@angular/core';
import { Cliente } from 'src/domain/cliente';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


const urlbase = "http://localhost:8080/demo/ws/parqueadero/"
@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  constructor(private http: HttpClient) {

  }


  save(cliente: Cliente)  {
    console.log("Servicio POST")
    console.log("cliente: "+cliente)
    return this.http.post<any>(urlbase, cliente)
  }

  getAll(){
      return this.http.get<Cliente[]>(urlbase+"listaCliente")
  }

  delete(cliente: Cliente){
    console.log("Metodo DELETE: "+cliente.cedula)
    return this.http.delete<any>(urlbase+"clientes/"+cliente.cedula)
  }

}
