// Sección de importación de librerias
import { defineStore } from "pinia";
import { evaluate, round } from 'mathjs';

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({ 
    //Declaracion de variables a utilizar
    arrayCalculos: [],
    operadorClick: true,
    actual: '',
    resultado: '',
    acumulador: '',
    botones: ([7, 8, 9, '/', 4, 5, 6, '+', 1, 2, 3, '-', 0, '.', '%', '*',]),
  }),  
  actions: {
    //Métodos a usar para uso de la calculadora
    isNumber(btn) {
      return !isNaN(btn);
    },
    btnReiniciar() {
      this.actual = '';
      this.resultado = '';
      this.acumulador = '';
      this.operadorClick = false;
    },
    btnAccion(valor) {
      if (!isNaN(valor)) {
        if (this.operadorClick) {
          this.actual = '';
          this.operadorClick = false;
        }
        this.actual += valor.toString();
      } else {
        this.ejecutarOperacion(valor);
      }
    },
    ejecutarOperacion(valor) {
      if (valor === '%') {
        if (this.actual !== '') {
          this.actual = (parseFloat(this.actual) / 100).toString();
        }
        return;
      }
      if (valor === '.') {
        if (this.actual.indexOf('.') === -1) {
          if (this.operadorClick) {
            this.actual = '';
            this.operadorClick = false;
          }
          this.actual += valor.toString();
        }
        return;
      }
      this.agregarOperador(valor);
    },
    agregarOperador(operador) {
      if (!this.operadorClick) {
        this.acumulador += `${this.actual} ${operador} `;
        this.actual = '';
        this.operadorClick = true;
      }
    },
    btnResultado() {
      if (!this.operadorClick) {
        this.resultado = evaluate(this.acumulador + this.actual);
        this.resultado = round(this.resultado, 3);
        this.arrayCalculos.push(
          `${this.acumulador} ${this.actual} = ${this.resultado}`
        );
      } else {
        this.resultado = 'Error!';
      }
    },
  },
});