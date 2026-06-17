import React, { useState } from 'react'

function Products() {

    var [a,b] = useState(69)

  return (
    <div>{a}
    <button className='px-3 py-1 text-xs rounded-md text-white bg-green-500' onClick={()=>b(a+1)}>Click</button>
    </div>
    
  )
}

export default Products