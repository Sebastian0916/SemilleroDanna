import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { SincoTheme } from '@sinco/react'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <StrictMode>
    <App />
  </StrictMode>,
  </ThemeProvider>
  
)
