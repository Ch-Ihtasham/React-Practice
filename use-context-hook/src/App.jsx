import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent from './components/parent'
import { myContext } from './context/context'
const num = new Array(30_000_000).fill(0).map((v, i) => {
  return {
    index: i,
    isMagical: i === 29_000_000
  };
});

function App() {

  const [count, setCount] = useState(0)
  // const expensiveComputation = (num) => {
  //   console.log('Calculating...');
    // Simulate a heavy computation
  //   let total = 0;
  //   for (let i = 0; i < 1e6; i++) {
  //     total += i * num;
  //   }
  //   return total;
  // };

  // const memoizedValue=expensiveComputation(count)
  // const memoizedValue = useMemo(() => expensiveComputation(count), [count]);
  const [number, setNum] = useState(num);
  const magical = useMemo(() => number.find(item => item.isMagical), []);
  return (
    <>
      <myContext.Provider value={count}>
        <Parent />
        {/* <h2>Memoized Value: {memoizedValue}</h2> */}
        {magical.index}
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
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </myContext.Provider>
    </>
  )
}

export default App
