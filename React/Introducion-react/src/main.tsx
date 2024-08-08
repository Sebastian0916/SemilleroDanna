import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerVista} from './PrimerVista'
import  './PrimerVista.scss';
import { ThemeProvider } from '@mui/material';
import { SincoTheme } from '@sinco/react';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
  <React.StrictMode>
    <PrimerVista></PrimerVista>
  </React.StrictMode>
  </ThemeProvider>
)
