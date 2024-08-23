import React, { useEffect, useState, useCallback } from 'react';
import './index.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const BookingForm = () => {
    const { id } = useParams();
    const [amount, setAmount] = useState(2000);
    const [name, setName] = useState('');
    const [duration, setDuration] = useState('30');
    const [mentor, setMentor] = useState([]);
    const navigate = useNavigate();

    const durationChange = e => {
        const duration = e.target.value;
        setDuration(duration);
        setAmount(duration === '30' ? 2000 : duration === '40' ? 3000 : 4000);
    };

    const bookSchedule = async e => {
        e.preventDefault();
        if (!name) {
            alert("Enter Your Name");
            return;
        }
        const userData = { student_name: name, mentor_id: id, duration, cost: amount };
        const sendSchedule = await axios.post('https://mock-schedule.onrender.com/api/bookings', userData);
        if (sendSchedule.status === 201) {
            alert('Scheduled successfully');
            navigate('/bookings');
        }
        setName('');
    };

    const getMentor = useCallback(async () => {
        const res = await axios.get(`https://mock-schedule.onrender.com/api/mentors/${id}/availability`);
        setMentor(res.data);
    }, [id]);

    useEffect(() => {
        getMentor();
    }, [getMentor]);

    return (
        <div className='booking-form'>
            <div>
                <h1>Mentor {mentor.name}</h1>
                <p>Expertise at {mentor.areas_of_expertise}</p>
                <input value={name} onChange={e => setName(e.target.value)} placeholder='Enter your name' required />
                <p>Choose duration</p>
                <select onChange={durationChange}>
                    <option value='30'>30Minutes</option>
                    <option value='40'>40Minutes</option>
                    <option value='60'>60Minutes</option>
                </select>
                <h1>Total Amount {amount}/-</h1>
                <button onClick={bookSchedule} type='submit'>Book Now</button>
            </div>
        </div>
    );
};

export default BookingForm;
