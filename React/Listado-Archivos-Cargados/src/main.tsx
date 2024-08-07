import React from 'react'
import ReactDOM from 'react-dom/client'
import { Listado } from './App.tsx'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { SincoTheme } from '@sinco/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
  <React.StrictMode>
    <Listado />
  </React.StrictMode>
  </ThemeProvider>
)
