import React from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';
import Navbar from '../components/Navbar';

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <AppointmentForm />
                <AppointmentList />
            </div>
        </>
    );
};

export default Home;