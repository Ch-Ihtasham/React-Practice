import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Us from './components/Us'
import Ue from './components/Ue'
import Um from './components/Um'
import StopWatch from './components/StopWatch'
import Button, { Btn3 } from './components/Button'
import App from './App'
import { Link } from 'react-router-dom'
createRoot(document.getElementById('root')).render(

  <div>
 
    <App />
    {/* <Us /> */}
    {/* <Ue/> */}
    {/* <Um /> */}
    {/* <StopWatch/> */}
    {/* <Button />
    <Btn3 /> */}


  </div>


)
