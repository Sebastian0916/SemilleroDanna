import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent, tipoIcono } from './card/card/card.component';

interface Props {
  title: string;
  description: string;
  icon: tipoIcono;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cards: Props[] = [
    {
      title: 'Configuración general',
      description:
        'Ajusta tipos de licitación, adjuntos, documentos solicitados,causas de desface y acceso a cotizaciones',
      icon: 'configuracion',
    },

    {
      title: 'Flujos y pasos de licitación',
      description: 'Crea flujos y configura sus pasos de una licitación',
      icon: 'flujo',
    },

    {
      title: 'Perfiles de acceso',
      description:
        'Configura según el perfil del usuario los permisos a flujos de licitación.',
      icon: 'perfil',
    },

    {
      title: 'Plantillas de notificaciones',
      description: '- - -',
      icon: 'plantillas',
    },
  ];
}
