import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Joker from './Joker.tsx'



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Joker />
  </StrictMode>,
)
