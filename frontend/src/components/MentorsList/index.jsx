import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const MentorsList = ({id,name,areaOfExpertise}) => {
  return (
    <Link to={`/booking/${id}`}>
    <div className='mentorlist-card'>
        <p><b>Mentor Name :</b> {name}</p>
        <p><b>Areas of expertise :</b> {areaOfExpertise}</p>
    </div>
    </Link>
  )
}

export default MentorsList