import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number,setNumber]=useState(false)
  const [charAllowed,setCharAllowed]=useState(false)
  const [password,setPassword]=useState('')

  return (
    <>
      <div className='text-center'>
        <div>password generator</div>
        <input
          type='text'
          className='bg-white'
        />
      </div>
    </>
  )
}

export default App
