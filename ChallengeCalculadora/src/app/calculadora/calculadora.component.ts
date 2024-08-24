import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
valor1: number = 0;
valor2: number = 0;

@Output() resultado = new EventEmitter<number>();

calcular(operacion:string){
  let resultado: number=0;
  switch(operacion){
    case 'suma':
      resultado = this.valor1 + this.valor2;
      break;
    case 'resta':
      resultado = this.valor1 - this.valor2;
      break;
    case 'multiplicacion':
      resultado = this.valor1 * this.valor2;
      break;
    case 'division':
      if (this.valor2 !== 0) {
        resultado = this.valor1 / this.valor2;
      } else {
        alert('No se puede dividir por cero');
        return;
      }
      break;
      case 'potencia':
        resultado = Math.pow(this.valor1, this.valor2);
        break;
      case 'raiz':
        resultado = Math.pow(this.valor1, 1 / this.valor2);
        break;
      }

  this.resultado.emit(resultado);
}
}