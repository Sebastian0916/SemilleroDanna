import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from '@emotion/react'
import { SincoTheme } from '@sinco/react'

import Timeline1 from './ejemploTimeline/Timeline1'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={SincoTheme}>
  <StrictMode>
  <Timeline1 />
  </StrictMode>
  </ThemeProvider>
)
