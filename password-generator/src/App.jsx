import { useCallback, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
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
    

  }, [length, numberAllowed, charAllowed, setPassword])
  passwordGenerator()


  return (
    <>
      {password}

    </>
  )
}

export default App
