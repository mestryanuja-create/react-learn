import React from 'react'

function Card(props) {
    console.log(props.age)
  return (
    
    <div className="card">
    <img src="https://images.unsplash.com/photo-1779126931857-f12866cf7049?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
    <h1>{props.user}, {props.age}</h1>
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum laudantium nemo ab vel praesentium aliquid nesciunt, veniam molestias corrupti animi reprehenderit. Placeat iste maiores odio omnis, officia quos repudiandae deserunt?</p>
    <button>View Profile</button>
  
  </div>
  )
}

export default Card