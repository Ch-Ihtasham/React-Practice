import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Us from './components/Us'
import Ue from './components/Ue'
import Um from './components/Um'
import StopWatch from './components/StopWatch'
createRoot(document.getElementById('root')).render(

  <div>
    {/* <Us /> */}
    {/* <Ue/> */}
    {/* <Um /> */}
    <StopWatch/>
    
  </div>


)
