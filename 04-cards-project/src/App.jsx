import React from 'react'
import Card from './components/Card'
const jobs = [
  {
    id: 1,
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
    id: 2,
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
    id: 3,
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
    id: 4,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1287&auto=format&fit=crop",
    company: "Netflix",
    postedAgo: "3 days ago",
    title: "UX Researcher",
    type: "Contract",
    level: "Junior level",
    rate: "$90/hr",
    location: "Los Angeles, USA"
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1287&auto=format&fit=crop",
    company: "Stripe",
    postedAgo: "1 week ago",
    title: "Backend Engineer",
    type: "Full-time",
    level: "Senior level",
    rate: "$160/hr",
    location: "Dublin, Ireland"
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1287&auto=format&fit=crop",
    company: "Shopify",
    postedAgo: "4 days ago",
    title: "Data Analyst",
    type: "Part-time",
    level: "Mid level",
    rate: "$110/hr",
    location: "Toronto, Canada"
  },
  {
    id: 7,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=1287&auto=format&fit=crop",
    company: "Airbnb",
    postedAgo: "6 days ago",
    title: "Motion Designer",
    type: "Freelance",
    level: "Senior level",
    rate: "$130/hr",
    location: "Berlin, Germany"
  },
  {
    id: 8,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1287&auto=format&fit=crop",
    company: "Spotify",
    postedAgo: "2 weeks ago",
    title: "iOS Developer",
    type: "Full-time",
    level: "Mid level",
    rate: "$140/hr",
    location: "Stockholm, Sweden"
  },
  {
    id: 9,
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1287&auto=format&fit=crop",
    company: "Slack",
    postedAgo: "3 days ago",
    title: "DevOps Engineer",
    type: "Full-time",
    level: "Senior level",
    rate: "$170/hr",
    location: "Remote"
  },
  {
    id: 10,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1287&auto=format&fit=crop",
    company: "Figma",
    postedAgo: "5 days ago",
    title: "UI Designer",
    type: "Contract",
    level: "Junior level",
    rate: "$95/hr",
    location: "Amsterdam, Netherlands"
  }
]
const App = () => {
  return (
    <div className='parent'>
      
      {jobs.map(function(elem,idx){
        console.log(idx);
        return <Card key={idx} image={elem.image} 
                     company={elem.company}
                     postedAgo={elem.postedAgo} 
                     title={elem.title}
                     type={elem.type}
                     level={elem.level}
                     rate={elem.rate}
                     location={elem.location}
                     />
      })}
    </div>
  )
}

export default App