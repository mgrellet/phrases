import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Phrases from './Phrases.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Phrases />
  </StrictMode>,
)
