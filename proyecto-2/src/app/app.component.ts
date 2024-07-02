import { Component } from '@angular/core';
// export interface PeriodicElement {
//   Nombre: string;
//   Habilitar: boolean;
//   Obligatorio: boolean;
//   Adjuntos: string[];
//   Acciones: string[];
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   { Nombre: 'Especificaciones técnicas', Habilitar: true, Obligatorio: true, Adjuntos: ['proyecto-2/src/assets/icons/div2.svg'], Acciones: ['proyecto-2/src/assets/icons/_icon1_.svg','proyecto-2/src/assets/icons/_Icon_.svg'] },
//   { Nombre: 'Adicionales', Habilitar: true, Obligatorio: true, Adjuntos: ['proyecto-2/src/assets/icons/div3.svg'], Acciones: ['proyecto-2/src/assets/icons/_icon1_.svg','proyecto-2/src/assets/icons/_Icon_.svg'] },
//   { Nombre: 'Generales', Habilitar: true, Obligatorio: true, Adjuntos: ['proyecto-2/src/assets/icons/div3.svg'], Acciones: ['proyecto-2/src/assets/icons/_icon1_.svg','proyecto-2/src/assets/icons/_Icon_.svg'] },
//   { Nombre: 'Planos', Habilitar: true, Obligatorio: true, Adjuntos: ['assets/icons/div5.svg'], Acciones: ['proyecto-2/src/assets/icons/_icon1_.svg','proyecto-2/src/assets/icons/_Icon_.svg'] },
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'proyecto-2';

  
  // displayedColumns: string[] = ['Nombre', 'Habilitar', 'obligatorio','adjuntos','acciones'];
  // dataSource = ELEMENT_DATA;
}
