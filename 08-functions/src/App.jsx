import React from 'react'

const App = () => {
  function btnClicked(){
    console.log("Clicked");
    
  }
  function mouseEnter(){
    console.log("Mouse entered");
    
  }
  function inputChanged(elem){
    console.log(elem);
    
  }
  return (
    <div>
      <h1>Hello</h1>
      <input onChange={function(elem){inputChanged(elem.target.value)}} type="text" />
      <button onMouseEnter={mouseEnter} onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App