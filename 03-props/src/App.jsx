import React from 'react'
import Card from './components/Card'

export default function App() {
  return (
    <div className='parent'>
      <Card user='Anuja' age={18}></Card>
      <Card user='Chaitri' age={17}></Card>
      <Card user='Chitri' age={18}></Card>
    </div>
  )
}
