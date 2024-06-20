import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

export type tipoIcono = 'configuracion'|'flujo'|'perfil'|'plantillas';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() titulo: string = ' ';
  @Input() descripcion: string = ' ';
  @Input() icono!: tipoIcono;
  

  constructor(){}

  get iconCard():string{
    return  this.icono === 'configuracion'
    ?'/assets/icons/Configuracion.svg'
    :this.icono ==='flujo'
    ?'/assets/icons/flujo.svg'
    :this.icono ==='perfil'
    ?'/assets/icons/perfil.svg'
    :this.icono ==='plantillas'
    ?'/assets/icons/plantilla.svg'
    :'';
  }
}
