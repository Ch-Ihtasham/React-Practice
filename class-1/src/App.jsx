import { useCallback, useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let a = useRef(0)
  let b = useRef(null)
  useEffect(() => {
    a.current = a.current + 1
    console.log(`value is updating ${a.current}`)
  }, [])
  const memoizedFunction = useCallback(() => {
    console.log('Hello world');
  }, [a]);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((prevCount) => prevCount + 1); // ✅ Proper state update
          if (b.current) {
            b.current.style.backgroundColor = 'red'; // ✅ Only modify ref safely
          }
          memoizedFunction();
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div >
      <p className="read-the-docs" ref={b}>
        Click on the Vite and React logos to learn more
      </p>

    </>
  )
}

export default App
