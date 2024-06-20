import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent,tipoIcono } from './card/card/card.component';


interface Props{
  titulo: string;
  descripcion: string;
  icono: tipoIcono;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cards: Props[] = [
    {
      titulo: 'Configuración general',
      descripcion: 'Ajusta tipos de licitación, adjuntos, documentos solicitados,causas de desface y acceso a cotizaciones',
      icono: "configuracion",
    },

    {
      titulo: 'Flujos y pasos de licitación',
      descripcion: 'Crea flujos y configura sus pasos de una licitación',
      icono: "flujo",
    },
    
    {
      titulo: 'Perfiles de acceso',
      descripcion: 'Configura según el perfil del usuario los permisos a flujos de licitación.',
      icono: "perfil",
    },

    {
      titulo: 'Plantillas de notificaciones',
      descripcion: '---',
      icono: "plantillas",
    },
  ]
}

