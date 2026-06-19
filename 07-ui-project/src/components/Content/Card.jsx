import React from 'react'
import 'remixicon/fonts/remixicon.css'

function Card(props) {
    console.log(props)
  return (
    <div className="rounded-2xl overflow-hidden shadow-lg bg-white w-64">
  <div className="relative">
    <img className="w-full h-40 object-cover" src={props.image} alt="" />
    <button className="absolute top-2 right-2 bg-white rounded-full px-3 py-1 text-xs flex items-center gap-1">
      Save<i className="ri-bookmark-line"></i>
    </button>
  </div>
  <div className="p-4">
    <h3 className="text-xs text-gray-400 flex justify-between">
      {props.company} <span>{props.postedAgo}</span>
    </h3>
    <h2 className="text-lg font-bold mt-1">{props.title}</h2>
    <div className="flex gap-2 mt-2">
      <h4 className="bg-gray-100 rounded-full px-2 py-1 text-xs">{props.type}</h4>
      <h4 className="bg-gray-100 rounded-full px-2 py-1 text-xs">{props.level}</h4>
    </div>
  </div>
  <div className="flex justify-between items-center p-4 border-t border-gray-100">
    <div>
      <h3 className="font-bold">{props.rate}</h3>
      <p className="text-xs text-gray-400">{props.location}</p>
    </div>
    <button className="bg-indigo-500 text-white rounded-full px-4 py-2 text-xs font-semibold">
      Apply Now!
    </button>
  </div>
</div>
  )
}

export default Card