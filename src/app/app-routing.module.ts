import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';
import { CrearclienteComponent } from './pages/crearcliente/crearcliente.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ListaComponent } from './pages/lista/lista.component';
import { ListaclientesComponent } from './pages/listaclientes/listaclientes.component';

const routes: Routes = [
{path:"pagina/inicio", component:InicioComponent},
{path:"pagina/lista", component:ListaComponent},
{path:"pagina/formulario", component:FormularioComponent},
{path:"pagina/calculadora", component:CalculadoraComponent},
{path:"pagina/listacliente", component:ListaclientesComponent},
{path:"pagina/crearcliente", component:CrearclienteComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
