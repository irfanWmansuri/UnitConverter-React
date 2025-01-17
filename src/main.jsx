import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Unitconverter from './UnitConverter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Unitconverter />
  </StrictMode>,
)
