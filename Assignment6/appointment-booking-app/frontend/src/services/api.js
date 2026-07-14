import axios from 'axios';

const API = axios.create({
    baseURL: "http://localhost:5000/api/appointments"
});

export const createAppointment = (data) => API.post('/', data);
export const getAppointments = () => API.get('/');
export const deleteAppointment = (id) => API.delete(`/${id}`);