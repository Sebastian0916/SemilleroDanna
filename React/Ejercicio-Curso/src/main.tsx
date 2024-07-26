import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { SincoTheme } from "@sinco/react";
import { Ejemplo } from "./Componentes/Ejemplo";
import { Stack } from "@mui/material";
import { EjemploUsuarios } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>

      <Ejemplo titulo="Titulo va aqui" descripcion="Descripcion va aqui">
        <Stack>
          <p>Lo logramos danna ya entendio</p>
        </Stack>
      </Ejemplo>

      <EjemploUsuarios />

    </React.StrictMode>
  </ThemeProvider>
);
