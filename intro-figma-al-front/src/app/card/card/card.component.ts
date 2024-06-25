import { Component, Input } from '@angular/core';

export type tipoIcono = 'configuracion' | 'flujo' | 'perfil' | 'plantillas';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: tipoIcono;

  constructor() {}

  get iconCard(): string {
    return this.icon === 'configuracion'
      ? '/assets/icons/Configuracion.svg'
      : this.icon === 'flujo'
      ? '/assets/icons/flujo.svg'
      : this.icon === 'perfil'
      ? '/assets/icons/perfil.svg'
      : this.icon === 'plantillas'
      ? '/assets/icons/plantilla.svg'
      : '';
  }
}
