import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { EjemploAdjuntar } from './EjemploAdjuntar'
import { ThemeProvider } from '@mui/material'
import { SincoTheme } from '@sinco/react'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
  <React.StrictMode>
    <EjemploAdjuntar/>
  </React.StrictMode>
  </ThemeProvider>
)
