import React from 'react'
import { useState } from 'react'

const App = () => {

  const [a, setA] = useState(20);
  const [userName, setuserName] = useState('Anuja')

  const [x, setx] = useState(0)

  function changeA(){
    setA(30);
    setuserName('Mestry')
  }

  function decX(){
    setx(x-1)
  }
  function incX(){
    setx(x+1)
  }
  return (
    <div>
      <h1>Value of A is {a} {userName}</h1>
      <button onClick={changeA}>Click</button>

      <div>
        <button onClick={decX}>-</button>
        <h2>{x}</h2>
        <button onClick={incX}>+</button>
      </div>
    </div>
  )
}

export default App