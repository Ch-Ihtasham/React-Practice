import { useState } from 'react'
import './App.css'
import Class1 from './components/Class1'

function App() {
  const [count, setCount] = useState(0)
  function naming() {
    alert('hello world')
  }
  return (
    <>
      <Class1 />
      <button onClick={()=> alert('helloooooo')}>usman</button>
    </>
  )
}

export default App
