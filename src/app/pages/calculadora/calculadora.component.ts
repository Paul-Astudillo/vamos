import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
nombre='Calculadora'

a=0
b=0
s=0
r=0
m=0
d=0



resultados(){

  this.s=this.a+this.b;
  this.r=this.a-this.b;
  this.m=this.a*this.b;
  this.d=this.a/this.b
};

lista = ['paul', 'andres']
addItem(newItem: string) {
  this.lista.push(newItem);
}




}
