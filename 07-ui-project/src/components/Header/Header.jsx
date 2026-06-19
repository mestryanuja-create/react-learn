import React from 'react'

const Header = () => {
  return (
    <div className='flex items-center justify-between w-full h-30 px-4'>
      <div className='w-16 h-16 p-2'>
        <img className='w-full h-full object-cover rounded-full' src="https://plus.unsplash.com/premium_vector-1726593468271-0cf32cc4776a?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="flex flex-col">
        <div className="text-lg font-bold">Presentation Deck</div>
        <div className="text-sm text-gray-500">Here is my presentation deck</div>
      </div>
    </div>
  )
}

export default Header