import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './components/HomePage';
import Header from './components/Header';
import BookingForm from './components/BookingForm';
import Bookings from './components/Bookings';

const App = () =>{
  return (
    <div>  
      <Header />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/booking/:id' element={<BookingForm />} />
      <Route path='/bookings' element={<Bookings />} />
    </Routes>
    </div>
  )
}

export default App;
