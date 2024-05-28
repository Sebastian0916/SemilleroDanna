import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true 
})
export class AppComponent {
  empleados: string[] = ['Sofia', 'Juan', 'Karen', 'Camilo', 'David'];
  codigoEmpleado: number[] = [234, 2345, 2345, 678, 456, 9876];
  marcasVehiculos: string[] = [
    'Toyota',
    'Ford',
    'BMW',
    'Honda',
    'Mercedes-Benz',
  ];
  animales: string[] = ['perro', 'gato', 'vaca', 'caballo', 'toro'];
  frutas: string[] = ['pera', 'piña', 'uva', 'manzana', 'melon'];

  codigo!: string;
  numeroAtolocalstring!: string;

  pop!: string[];
  fill!: number[];
  sort!: string[];
  push!: string[];
  join: string = '';
  find: string = '';
  splice!: string[];
  reverse!: string[];
  map: number[] = [];
  unShift!: number[];
  indexOf:number = -1;
  concat: string[] = [];
  forEach: string[] = [];
  findIndex: number = -1;
  includes: boolean = true;
  empleadosPerezosos!: string[];

  constructor() {
    this.metodoToString();
    this.metodoSlice();
    this.metodoPush('Danna');
    this.metodotoLocaleString();
    this.metodoReverse();
    this.metodoUnShift(3546);
    this.metodoFill();
    this.metodoForeach();
    this.metodofilter();
    this.metodopop();
    this.metodomap();
    this.metodosplice();
    this.metodosort();
    this.metodofind();
    this.metodoconcat();
    this.metodofindIndex();
    this.metodoincludes();
    this.metodoindexOf();
    this.metodojoin();
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

  metodofilter(): void {
    this.empleados = [
      ...this.empleados.filter((empleado) => empleado.includes('u')),
    ];
  }

  metodopop() {
    this.pop = [...this.animales];
    this.pop.pop();
  }

  metodomap() {
    this.map = this.empleados.map((empleado) => empleado.length);
  }

  metodosort() {
    this.animales.sort();
  }

  metodosplice() {
    this.splice = [...this.animales];
    this.splice.splice(2, 1);
  }

  metodojoin(): void {
    this.join = this.marcasVehiculos.join('  ');
    
  }

  metodoindexOf(): void {
    this.indexOf = this.marcasVehiculos.indexOf('Honda');
  }

  metodoincludes(): void {
    this.includes = this.empleados.includes('Juan');
  }

  metodoconcat(): void {
    this.concat = [...this.frutas, ...this.animales];
  }

  metodofind() {
    this.find = this.animales.find((animal) => animal.includes('g')) || '';
  }

  metodofindIndex() {
    this.findIndex = this.frutas.findIndex((frutas) => frutas.includes('n'));
  }

  metodosome(){

  }

  metodoreduce(){

  }
}
