import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavDrawer from './components/Scaffold/NavDrawer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NavDrawer />
  </StrictMode>,
)
