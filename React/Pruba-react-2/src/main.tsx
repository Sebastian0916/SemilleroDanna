import React from "react";
import ReactDOM from "react-dom/client";
import { Carta } from "./components/carta";
import { SincoTheme } from "@sinco/react";
import { ThemeProvider } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={SincoTheme}>
    <React.StrictMode>
      <Carta />
    </React.StrictMode>
  </ThemeProvider>
);
