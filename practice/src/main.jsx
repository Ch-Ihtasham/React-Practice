import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Us from './components/Us'
import Ue from './components/Ue'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Us/>
    <Ue/>
  </StrictMode>,
)
