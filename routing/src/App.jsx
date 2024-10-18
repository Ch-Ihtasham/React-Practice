import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Fotter from './Components/Fotter/Fotter'
import {Outlet} from 'react-router-dom'
function App() {


  return (
    <div>
      <Navbar />
      <Outlet/>
      <Fotter />
    </div>
  )
}

export default App
