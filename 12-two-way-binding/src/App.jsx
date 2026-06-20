import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')


  const submitHandler=(e)=>{
    e.preventDefault(); 
    settitle('')
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitHandler(e)}}>
        <input type="text" placeholder='type here' 
        onChange={(e)=>{settitle(e.target.value); console.log(title)}}
         value={title}/>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App