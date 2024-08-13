import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import BasicModal from './ComponentesMui/Modal'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    < BasicModal/>
  </StrictMode>,
)
