import React from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'


const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Header></Header>
      <Content></Content>
    </div>
  )
}

export default App