import React, { useEffect, useState } from 'react';
import { getAppointments, deleteAppointment } from '../services/api';

const AppointmentList = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const res = await getAppointments();
        setData(res.data);
    };

    return (
        <div className="list">
            <h3>Appointments</h3>
            {data.map(item => (
                <div className="card" key={item._id}>
                    <p><b>{item.name}</b></p>
                    <p>{item.service}</p>
                    <p>{item.date} | {item.time}</p>
                    <button onClick={() => deleteAppointment(item._id).then(fetchData)}>
                        Delete
                    </button>
                </div>
            ))}
        </div>
    );
};

export default AppointmentList;