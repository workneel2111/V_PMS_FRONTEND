import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import {
    getAppointments,
    createAppointment,
    updateAppointmentStatus
} from "../services/appointmentService";

import { getVisitors } from "../services/visitorService";

import API from "../services/api";

function Appointments() {

    const [appointments, setAppointments] =
        useState([]);

    const [visitors, setVisitors] =
        useState([]);

    const [hosts, setHosts] =
        useState([]);

    const [formData, setFormData] =
        useState({
            visitor: "",
            host: "",
            date: "",
            time: "",
            purpose: "",
            notes: ""
        });

    /* =========================
       FETCH APPOINTMENTS
    ========================= */

    const fetchAppointments = async () => {

        try {

            const data =
                await getAppointments();

            setAppointments(data);

        } catch (error) {
            console.log(error);
        }
    };

    /* =========================
       FETCH VISITORS
    ========================= */

    const fetchVisitors = async () => {

        try {

            const data =
                await getVisitors();

            setVisitors(data);

        } catch (error) {
            console.log(error);
        }
    };

    /* =========================
       FETCH HOSTS
    ========================= */

    const fetchHosts = async () => {

        try {

            const response =
                await API.get("/auth/users");

            setHosts(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {

        fetchAppointments();

        fetchVisitors();

        fetchHosts();

    }, []);

    /* =========================
       HANDLE INPUT CHANGE
    ========================= */

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    /* =========================
       CREATE APPOINTMENT
    ========================= */

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            await createAppointment(formData);

            alert(
                "✅ Appointment Created Successfully"
            );

            // Reset form
            setFormData({
                visitor: "",
                host: "",
                date: "",
                time: "",
                purpose: "",
                notes: ""
            });

            // Refresh data
            fetchAppointments();

        } catch (error) {

            console.log(error);

            alert(
                "❌ Failed to create appointment"
            );
        }
    };

    /* =========================
       UPDATE STATUS
    ========================= */

    const handleStatusUpdate = async (
        id,
        status
    ) => {

        try {

            await updateAppointmentStatus(
                id,
                status
            );

            fetchAppointments();

        } catch (error) {

            console.log(error);

            alert(
                "❌ Failed to update status"
            );
        }
    };

    return (
        <MainLayout>

            <h1
                style={{
                    marginBottom: "20px"
                }}
            >
                Appointments
            </h1>

            {/* =========================
                APPOINTMENT FORM
            ========================= */}

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "grid",
                    gap: "12px",
                    background: "white",
                    padding: "20px",
                    borderRadius: "10px",
                    marginBottom: "30px",
                    boxShadow:
                        "0 0 10px rgba(0,0,0,0.1)"
                }}
            >

                {/* Visitor Select */}

                <select
                    name="visitor"
                    value={formData.visitor}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                >

                    <option value="">
                        Select Visitor
                    </option>

                    {visitors.map((visitor) => (

                        <option
                            key={visitor._id}
                            value={visitor._id}
                        >
                            {visitor.fullName}
                        </option>
                    ))}

                </select>

                {/* Host Select */}

                <select
                    name="host"
                    value={formData.host}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                >

                    <option value="">
                        Select Host
                    </option>

                    {hosts.map((host) => (

                        <option
                            key={host._id}
                            value={host._id}
                        >
                            {host.name}
                        </option>
                    ))}

                </select>

                <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <input
                    type="text"
                    name="time"
                    placeholder="Time"
                    value={formData.time}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <input
                    type="text"
                    name="purpose"
                    placeholder="Purpose"
                    value={formData.purpose}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <textarea
                    name="notes"
                    placeholder="Notes"
                    value={formData.notes}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <button
                    type="submit"
                    style={buttonStyle}
                >
                    Create Appointment
                </button>

            </form>

            {/* =========================
                APPOINTMENT LIST
            ========================= */}

            <div
                style={{
                    display: "grid",
                    gap: "20px"
                }}
            >

                {appointments.length > 0 ? (

                    appointments.map((appointment) => (

                        <div
                            key={appointment._id}
                            style={cardStyle}
                        >

                            <h3>
                                👤 {
                                    appointment.visitor
                                        ?.fullName ||
                                    "No Visitor"
                                }
                            </h3>

                            <p>
                                🧑 Host:
                                {" "}
                                {
                                    appointment.host
                                        ?.name
                                }
                            </p>

                            <p>
                                📅 Date:
                                {" "}
                                {appointment.date}
                            </p>

                            <p>
                                ⏰ Time:
                                {" "}
                                {appointment.time}
                            </p>

                            <p>
                                🎯 Purpose:
                                {" "}
                                {
                                    appointment.purpose
                                }
                            </p>

                            <p>
                                📌 Status:
                                {" "}
                                <strong>
                                    {
                                        appointment.status
                                    }
                                </strong>
                            </p>

                            <p>
                                📝 Notes:
                                {" "}
                                {
                                    appointment.notes
                                }
                            </p>

                            {/* Buttons */}

                            <div
                                style={{
                                    display: "flex",
                                    gap: "10px",
                                    marginTop: "15px"
                                }}
                            >

                                <button
                                    onClick={() =>
                                        handleStatusUpdate(
                                            appointment._id,
                                            "approved"
                                        )
                                    }
                                    style={{
                                        ...buttonStyle,
                                        background:
                                            "green"
                                    }}
                                >
                                    Approve
                                </button>

                                <button
                                    onClick={() =>
                                        handleStatusUpdate(
                                            appointment._id,
                                            "rejected"
                                        )
                                    }
                                    style={{
                                        ...buttonStyle,
                                        background:
                                            "red"
                                    }}
                                >
                                    Reject
                                </button>

                            </div>

                        </div>
                    ))

                ) : (

                    <p>
                        No Appointments Found
                    </p>
                )}

            </div>

        </MainLayout>
    );
}

/* =========================
   STYLES
========================= */

const inputStyle = {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #ccc"
};

const buttonStyle = {
    padding: "10px",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

const cardStyle = {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow:
        "0 0 10px rgba(0,0,0,0.1)"
};

export default Appointments;