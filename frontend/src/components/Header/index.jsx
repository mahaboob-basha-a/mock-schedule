import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Header = () => {
  return (
    <header className='header-section'>
        <Link to='/'>Home</Link>
        <Link to='/booking/1'>Create Schedule</Link>
        <Link to='/bookings'>Bookings</Link>
    </header>
  )
}

export default Header