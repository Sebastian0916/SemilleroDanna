import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { SincoTheme } from '@sinco/react'

import Timeline2 from './ejemploTimeline/Timeline2'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
  <StrictMode>
  <Timeline2 />
  </StrictMode>
  </ThemeProvider>
)
