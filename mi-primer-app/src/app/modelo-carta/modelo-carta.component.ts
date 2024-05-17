import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export type tipoCarta = 'alert' | 'info' | 'warning' | 'error';
export type tipoIcono = 'supervisor'|'calculator'|'karma'|'team-builder';
// tipoCarta
@Component({
  selector: 'app-modelo-carta',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './modelo-carta.component.html',
  styleUrl: './modelo-carta.component.scss',
})
export class ModeloCartaComponent {
  @Input() titulo: string = ' ';
  @Input() descripcion: string = ' ';
  @Input() icono!: tipoIcono;
  @Input() tipo!: tipoCarta;
  
  constructor() {}

  get bordeCarta(): string {
    return this.tipo === 'alert'
      ? 'alert'
      : this.tipo === 'error'
      ? 'error'
      : this.tipo === 'info'
      ? 'info'
      : this.tipo === 'warning'
      ? 'warning'
      : '';
  }
  get iconoCarta(): string{
    return this.icono ==='supervisor' 
    ? '/assets/iconos/icon-supervisor 1.svg'
    :this.icono ==='calculator' 
    ? '/assets/iconos/icon-calculator 1.svg'
    :this.icono === 'karma'
    ?'/assets/iconos/icon-karma 1.svg': 
    this.icono === 'team-builder'
    ? '/assets/iconos/Group.svg' 
    :'';
  } 
}
