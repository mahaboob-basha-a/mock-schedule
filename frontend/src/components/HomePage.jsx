import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MentorsList from './MentorsList'

const HomePage = () => {
    const [availableMentors,setavailableMentors] = useState([])
    const getAvailableMentors = async()=>{
        const res = await axios.get('https://mock-schedule.onrender.com/api/mentors')
        const mentorsData = res.data
        setavailableMentors(mentorsData.data)
    }
    useEffect(()=>{
        getAvailableMentors()
    },[])
  return (
    <div>
        <h2>Available Mentors List</h2>
        {availableMentors.map(item=>{
            const {id,name,areas_of_expertise} = item
            return <MentorsList key={id} id={id} name={name} areaOfExpertise={areas_of_expertise}  />
        })}
    </div>
  )
}

export default HomePage