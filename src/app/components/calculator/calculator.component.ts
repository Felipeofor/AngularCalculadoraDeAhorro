import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {

  ingreso: number= 0;
  paraTodaLaVida: number= 0;
  diezPorciento: number= 0.10;
  veintePorciento: number= 0.20;
  sesentaPorciento: number= 0.60;
  sueldoReal: number= 0;
  gastosBasicos: number= 0;
  gustosCortoPlazo: number= 0;
  gustosLargoPlazo: number= 0;
  emergencias: number= 0

  calcular():void{
    this.paraTodaLaVida = this.ingreso * this.diezPorciento;
    this.sueldoReal = this.ingreso - this.paraTodaLaVida;
    this.gastosBasicos = this.sueldoReal * this.sesentaPorciento;
    this.gustosCortoPlazo = this.gastosBasicos * this.diezPorciento;
    this.gustosLargoPlazo = this.gastosBasicos * this.diezPorciento;
    this.emergencias = this.sueldoReal * this.veintePorciento;
  }
}
