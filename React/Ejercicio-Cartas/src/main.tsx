import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import { SincoTheme } from "@sinco/react";
import { VistaCarta } from "./Componentes/Carta";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <VistaCarta >
      </VistaCarta>
    </React.StrictMode>
  </ThemeProvider>
);
