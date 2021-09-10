import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  // i18nSelect
  nombre: string = 'Abel';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Abel', 'Ana', 'David'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos clientes esperando.',
    'other': 'tenemos # clientes esperando' // Quan és més de 2, posarà per defecte si hi ha 3, 3, 4,4, etc.
  }

  cambiarCliente() {
    this.nombre = 'Ana';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }

  // KeyValue Pipe https://angular.io/api/common/KeyValuePipe
  persona = {
    nombre: 'Abel',
    edad: 20,
    direccion: 'Tarragona, España'
  }

  // Json Pipe https://angular.io/api/common/JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ]

  // Async Pipe https://angular.io/api/common/AsyncPipe
  miObservable = interval(500); // Reb un argument de tipus number i retorna un Observable
  // (Funcionament) imprimirà números d'1 en 1 cada 500milisegons

  // Mitjançant promesa
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa')
    }, 3500)
  })

}
