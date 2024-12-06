import { useRef } from 'react'
import { useCallback, useEffect, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const copyPass = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (numberAllowed) str += '0123456789'
    if (charAllowed) str += '!@#$%&*?'
    for (let i = 1; i <= length; i++) {
      let char = Math.floor((Math.random() * str.length) + 1)
      pass += str.charAt(char)

    }
    console.log(pass)
    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, setPassword])

  const passCopy = useCallback(() => {
    copyPass.current.select()
    window.navigator.clipboard.writeText(password)

  }, [password])
  return (
    <>

      <input type="text"
        value={password}
        readOnly
        ref={copyPass}
      />
      <input type="range"
        value={length}
        min={6}
        max={100}
        onChange={(e) => {
          setLength(e.target.value)
        }}

      />
      <label>length:{length}</label>

      <button onClick={passCopy}>copy</button>

    </>
  )
}

export default App
