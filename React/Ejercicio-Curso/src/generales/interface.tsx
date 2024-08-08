import { ReactNode } from "react";

export interface Usuario {
  id: number;
  nombre: string;
  edad: number;
}

export interface EjemploProps {
  titulo: string;
  descripcion: string;
  children: ReactNode;
}
