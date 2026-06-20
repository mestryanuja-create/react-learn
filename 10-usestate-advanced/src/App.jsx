import React, { useState } from 'react'

const App = () => {

  const [user, setuser] = useState({name:'Anuja', age:32})
  const [arr, setarr] = useState([10,20,30])

  const changeValues=()=>{
    const newName = {...user};
    newName.name = 'Chitri'
    newName.age = 27
    setuser(newName)
    
  }

  const updateArr =()=>{
    console.log(arr);
    
    //setarr(prev=>[...arr,90])
    setarr(prev=>prev.slice(0,-1))
    // const newArr = [...arr]
    // newArr.push(99)
    // setarr(newArr)
  }  
  
  return (
    <div>
      <h1>{user.name}, {user.age}</h1>
      <button onClick={changeValues}>Click</button>

      <h1>values of arr {arr}</h1>
      <button onClick={updateArr}>Click</button>
    </div>
  )
}

export default App