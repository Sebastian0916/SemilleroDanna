import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@mui/material'
import { SincoTheme } from '@sinco/react'
import './App.css'

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Principal from './vista/Principal'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
    <StrictMode>
    <Principal />
  </StrictMode>
  </ThemeProvider>
  
)
