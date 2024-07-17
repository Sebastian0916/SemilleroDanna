import { Component } from '@angular/core';

export interface TableData {
  nombre: string;
  obligatorio: boolean;
  habilitar: boolean;
  adjuntos: string;
  acciones: string;
}

const ELEMENT_DATA: TableData[] = [
  { nombre: 'Especificaciones técnicas', habilitar: true, obligatorio: true,adjuntos: 'H',acciones: 'H' },
  { nombre: 'Adicionales', habilitar: true, obligatorio: true,adjuntos: 'H',acciones: 'H' },
  { nombre: 'Generales', habilitar: true, obligatorio: true,adjuntos: 'H',acciones: 'H' },
  { nombre: 'Planos', habilitar: true, obligatorio:true ,adjuntos: 'H',acciones: 'H' },
  
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  displayedColumns: string[] = ['nombre', 'habilitar', 'obligatorio', 'adjuntos','acciones'];
  dataSource = ELEMENT_DATA;
}
