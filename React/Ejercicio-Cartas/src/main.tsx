import React from "react";
import ReactDOM from "react-dom/client";
import { VistaCarta } from "./Componentes/VistaCarta";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { SincoTheme } from "@sinco/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <VistaCarta titulo="Prueba" >
        <p>asdfghjkl</p>
      </VistaCarta>
    </React.StrictMode>
  </ThemeProvider>
);
