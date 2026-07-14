const Appointment = require('../models/Appointment');

// CREATE
exports.createAppointment = async (req, res) => {
    try {
        const appt = await Appointment.create(req.body);
        res.status(201).json(appt);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// GET ALL
exports.getAppointments = async (req, res) => {
    const data = await Appointment.find().sort({ createdAt: -1 });
    res.json(data);
};

// UPDATE
exports.updateAppointment = async (req, res) => {
    const updated = await Appointment.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(updated);
};

// DELETE
exports.deleteAppointment = async (req, res) => {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted Successfully" });
};