import React, { useState } from 'react';
import { createAppointment } from '../services/api';

const AppointmentForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        date: '',
        time: '',
        service: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        await createAppointment(form);
        window.location.reload();
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h3>Book Appointment</h3>

            <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})}/>
            <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})}/>
            <input type="date" onChange={e => setForm({...form, date: e.target.value})}/>
            <input type="time" onChange={e => setForm({...form, time: e.target.value})}/>
            <input placeholder="Service" onChange={e => setForm({...form, service: e.target.value})}/>

            <button>Book</button>
        </form>
    );
};

export default AppointmentForm;