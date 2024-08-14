import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TemporaryDrawer from './ComponentesMui/Drawer'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < TemporaryDrawer/>
  </StrictMode>,
)
