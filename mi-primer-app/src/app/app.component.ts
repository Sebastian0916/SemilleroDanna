import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModeloCartaComponent, tipoCarta, tipoIcono } from './modelo-carta/modelo-carta.component';

interface Props {
  titulo: string;
  descripcion: string;
  icono: tipoIcono;
  tipo: tipoCarta;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ModeloCartaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  cartas: Props[] = [
    {
      titulo: 'Team Builder',
      descripcion: 'Scans our talent network to create the optimal team for you project',
      icono: "team-builder",
      tipo: 'error',
    },
   
    {
      titulo: 'Karma',
      descripcion: 'Regulary evaluates our talent to ensure quality',
      icono: "karma",
      tipo:'warning',
    },
   
  ];
}
