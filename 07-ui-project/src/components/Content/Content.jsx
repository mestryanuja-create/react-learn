import React from 'react'
import Card from './Card'

const cardArr = [
    {
      image: "https://images.unsplash.com/photo-1779126931857-f12866cf7049?q=80&w=1287&auto=format&fit=crop",
      company: "Amazon",
      postedAgo: "5 days ago",
      title: "Designer",
      type: "Part-time",
      level: "Senior level",
      rate: "$120/hr",
      location: "Mumbai, India"
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1287&auto=format&fit=crop",
      company: "Google",
      postedAgo: "2 days ago",
      title: "Frontend Engineer",
      type: "Full-time",
      level: "Mid level",
      rate: "$150/hr",
      location: "New York, USA"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1287&auto=format&fit=crop",
      company: "Meta",
      postedAgo: "1 day ago",
      title: "Product Manager",
      type: "Full-time",
      level: "Senior level",
      rate: "$180/hr",
      location: "San Francisco, USA"
    },
    {
      image: "https://images.unsplash.com/photo-1779126931857-f12866cf7049?q=80&w=1287&auto=format&fit=crop",
      company: "Amazon",
      postedAgo: "5 days ago",
      title: "Designer",
      type: "Part-time",
      level: "Senior level",
      rate: "$120/hr",
      location: "Mumbai, India"
    },
    {
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1287&auto=format&fit=crop",
      company: "Google",
      postedAgo: "2 days ago",
      title: "Frontend Engineer",
      type: "Full-time",
      level: "Mid level",
      rate: "$150/hr",
      location: "New York, USA"
    },
    {
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1287&auto=format&fit=crop",
      company: "Meta",
      postedAgo: "1 day ago",
      title: "Product Manager",
      type: "Full-time",
      level: "Senior level",
      rate: "$180/hr",
      location: "San Francisco, USA"
    }
  ]
const Content = () => {
  return (
    <div className='w-full h-100 flex items-start justify-between m-5'>
        
        <div className="content-left h-full w-3/12 m-3">
            <div className="content-text p-5">
                <div className='font-semibold text-4xl leading-10 p-1'>
                    <h3>Prospective <br />Customer <br/> Segmentation </h3>
                </div>
                <div className='font-normal leading-3'>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. </h3>
                </div>
            </div>

            <div className='text-8xl'><i class="ri-arrow-right-up-line"></i></div>
        </div>
        <div className="content-right flex justify-around align-middle h-full w-7/12 m-3 overflow-x-auto scrollbar-thin">
            <div>
            <div className="flex gap-4 ">
            {cardArr.map((elem, index) => (
                    <Card
                    key={index}
                    image={elem.image}
                    company={elem.company}
                    postedAgo={elem.postedAgo}
                    title={elem.title}
                    type={elem.type}
                    level={elem.level}
                    rate={elem.rate}
                    location={elem.location}
                    />
                ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Content