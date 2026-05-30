import { useEffect, useState } from "react";

import MainLayout from "../layouts/MainLayout";

import {
    getVisitors,
    createVisitor
} from "../services/visitorService";

function Visitors() {

    const [visitors, setVisitors] = useState([]);

    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        purpose: "",
        company: "",
        photo: null
    });

    /* =========================
       FETCH VISITORS
    ========================= */

    const fetchVisitors = async () => {
        try {

            const data = await getVisitors();

            setVisitors(data);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchVisitors();
    }, []);

    /* =========================
       HANDLE INPUT CHANGE
    ========================= */

    const handleChange = (e) => {

        // File upload
        if (e.target.name === "photo") {

            setFormData({
                ...formData,
                photo: e.target.files[0]
            });

        } else {

            setFormData({
                ...formData,
                [e.target.name]: e.target.value
            });
        }
    };

    /* =========================
       HANDLE FORM SUBMIT
    ========================= */

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const data = new FormData();

            data.append(
                "fullName",
                formData.fullName
            );

            data.append(
                "email",
                formData.email
            );

            data.append(
                "phone",
                formData.phone
            );

            data.append(
                "purpose",
                formData.purpose
            );

            data.append(
                "company",
                formData.company
            );

            if (formData.photo) {
                data.append(
                    "photo",
                    formData.photo
                );
            }

            await createVisitor(data);

            alert("✅ Visitor Created Successfully");

            // Reset form
            setFormData({
                fullName: "",
                email: "",
                phone: "",
                purpose: "",
                company: "",
                photo: null
            });

            // Refresh visitor list
            fetchVisitors();

        } catch (error) {
            console.log(error);

            alert("❌ Error creating visitor");
        }
    };

    return (
        <MainLayout>

            <h1
                style={{
                    marginBottom: "20px"
                }}
            >
                Visitors
            </h1>

            {/* =========================
                VISITOR FORM
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

                <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <input
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
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

                <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                />

                <input
                    type="file"
                    name="photo"
                    onChange={handleChange}
                    style={inputStyle}
                />

                <button
                    type="submit"
                    style={buttonStyle}
                >
                    Add Visitor
                </button>

            </form>

            {/* =========================
                VISITOR LIST
            ========================= */}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns:
                        "repeat(auto-fit, minmax(250px, 1fr))",
                    gap: "20px"
                }}
            >

                {visitors.length > 0 ? (
                    visitors.map((visitor) => (

                        <div
                            key={visitor._id}
                            style={{
                                background: "white",
                                padding: "20px",
                                borderRadius: "10px",
                                boxShadow:
                                    "0 0 10px rgba(0,0,0,0.1)"
                            }}
                        >

                            <h3>
                                {visitor.fullName}
                            </h3>

                            <p>
                                📧 {visitor.email}
                            </p>

                            <p>
                                📱 {visitor.phone}
                            </p>

                            <p>
                                🏢 {visitor.company}
                            </p>

                            <p>
                                🎯 {visitor.purpose}
                            </p>

                            {/* Photo */}
                            {visitor.photo && (
                                <img
                                    src={`https://v-pms-backend.onrender.com/${visitor.photo}`}
                                    alt="visitor"
                                    width="100%"
                                    style={{
                                        marginTop: "10px",
                                        borderRadius: "10px"
                                    }}
                                />
                            )}

                        </div>
                    ))
                ) : (
                    <p>No Visitors Found</p>
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
    padding: "12px",
    background: "#1e293b",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default Visitors;