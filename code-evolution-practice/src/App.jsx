import { useState } from 'react'
import './App.css'
import Class1 from './components/Class1'
import MethodProps from './components/MethodProps'

function App() {
  const [count, setCount] = useState(0)
  function naming() {
    alert('hello world')
  }
  return (
    <>
      {/* <Class1 />
      <button onClick={()=> alert('helloooooo')}>usman</button> */}
      {/* <MethodProps /> */}
      <div>
        <div>My Logo</div>
        <div>
          <a href="">home</a>
          <a href="">home</a>
          <a href="">home</a>
          <a href="">home</a>
        </div>
        {
          
        }
      </div>
    </>
  )
}

export default App
