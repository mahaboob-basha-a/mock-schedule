import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './index.css'

const Bookings = () => {
    const [bookingsData,setBookingsData] = useState([])
    const getBookings = async ()=>{
        const res = await axios.get('https://mock-schedule.onrender.com/api/bookings')
        const bookingsList = res.data
        setBookingsData(bookingsList.data)
    }
    useEffect(()=>{
        getBookings()
    },[])
  return (
    <>
    {bookingsData.length > 0 ? 
    <table className="bookings-table">
      <thead>
        <tr>
          <th>Mentor Name</th>
          <th>Student Name</th>
          <th>Duration</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {bookingsData.map((item, index) => (
            <tr key={index}>
            <td>{item.name}</td>
            <td>{item.student_name}</td>
            <td>{item.duration} Minutes</td>
            <td>{item.cost} /-</td>
          </tr>
        ))}
      </tbody>
    </table>
    : <h2>No Bookings Found</h2>}

    </>
  )
}

export default Bookings