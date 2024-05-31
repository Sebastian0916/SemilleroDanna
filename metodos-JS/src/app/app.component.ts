import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
})
export class AppComponent {
  frutas: string[] = ['pera', 'piña', 'uva', 'manzana', 'melon'];
  animales: string[] = ['perro', 'gato', 'vaca', 'caballo', 'toro'];
  empleados: string[] = ['Sofia', 'Juan', 'Karen', 'Camilo', 'David'];
  marcasVehiculos: string[] = [
    'Toyota',
    'Ford',
    'BMW',
    'Honda',
    'Mercedes-Benz',
  ];
  codigoEmpleado: number[] = [234, 2345, 2345, 678, 456, 9876];
  numeros = [3, 10, 18, 20];

  codigo!: string;
  numeroAtolocalstring!: string;

  pop!: string[];
  sort!: string[];
  push!: string[];
  splice!: string[];
  reverse!: string[];
  upperCase: string[] = [];
  lowerCase: string[] = [];
  concat: string[] = [];
  forEach: string[] = [];
  empleadosPerezosos!: string[];

  join: string = '';
  find: string = '';

  map: number[] = [];
  unShift!: number[];
  fill!: number[];
  reduce: number = 0;

  indexOf: number = -1;
  findIndex: number = -1;

  some!: boolean;
  includes!: boolean;
  constructor() {
    this.metodoToString();
    this.metodoSlice();
    this.metodoPush('Danna');
    this.metodotoLocaleString();
    this.metodoReverse();
    this.metodoUnShift(3546);
    this.metodoFill();
    this.metodoForeach();
    this.metodoFilter();
    this.metodoPop();
    this.metodoMap();
    this.metodoSplice();
    this.metodoSort();
    this.metodoFind();
    this.metodoConcat();
    this.metodoFindIndex();
    this.metodoIncludes();
    this.metodoIndexOf();
    this.metodoReduce();
    this.metodoJoin();
    this.metodoSome();
    this.metodoLowerCase();
    this.metodoUpperCase();
  }

  metodoUnShift(codigoNuevo: number): void {
    this.unShift = [...this.codigoEmpleado];
    this.unShift.unshift(codigoNuevo);
  }

  metodoToString() {
    this.codigo = this.codigoEmpleado[2].toString();
  }
  metodoFill() {
    this.fill = [...this.codigoEmpleado];
    this.fill.fill(0);
  }
  metodoSlice() {
    this.empleadosPerezosos = this.empleados.slice(1, 4);
  }
  metodoPush(empleadoNuevo: string): void {
    this.push = [...this.empleados];
    this.push.push(empleadoNuevo);
  }
  metodoReverse() {
    this.reverse = [...this.empleados];
    this.reverse.reverse();
  }
  metodotoLocaleString() {
    this.numeroAtolocalstring = this.codigoEmpleado.toLocaleString();
  }

  metodoForeach(): void {
    this.forEach = [];
    this.marcasVehiculos.forEach((marca) => {
      this.forEach.push(`${marca}`);
    });
  }

  metodoFilter(): void {
    this.empleados = [
      ...this.empleados.filter((empleado) => empleado.includes('a')),
    ];
  }

  metodoPop() {
    this.pop = [...this.animales];
    this.pop.pop();
  }

  metodoMap() {
    this.map = this.codigoEmpleado.map((e) => e * 6);
  }

  metodoSort() {
    this.animales.sort();
  }

  metodoSplice() {
    this.splice = [...this.animales];
    this.splice.splice(2, 1);
  }

  metodoJoin(): void {
    this.join = this.marcasVehiculos.join('  ');
  }

  metodoIndexOf(): void {
    this.indexOf = this.marcasVehiculos.indexOf('Honda');
  }

  metodoIncludes(): void {
    this.includes = this.empleados.includes('Juan');
  }

  metodoConcat(): void {
    this.concat = [...this.frutas, ...this.animales];
  }

  metodoFind() {
    this.find = this.animales.find((animal) => animal.includes('g')) || '';
  }

  metodoFindIndex() {
    this.findIndex = this.frutas.findIndex((frutas) => frutas.includes('n'));
  }

  metodoSome() {
    this.some = this.numeros.some((num) => {
      return num < 2;
    });
  }

  metodoReduce() {
    this.reduce = this.numeros.reduce((acc, cur) => acc + cur, 0);
  }

  metodoLowerCase() {
    this.lowerCase = [...this.empleados];
    this.lowerCase = this.lowerCase.map((empleado) => empleado.toLowerCase());
  }

 metodoUpperCase(){
    this.upperCase = [...this.animales];
    this.upperCase = this.upperCase.map(animal => animal.replace(/\b\w/g, letra => letra.toUpperCase()));
}
}
