import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { loginUser } from "../services/authService";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] =
        useState({
            email: "",
            password: ""
        });

    /* =========================
       HANDLE CHANGE
    ========================= */

    const handleChange = (e) => {

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    /* =========================
       HANDLE LOGIN
    ========================= */

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {

            const data =
                await loginUser(formData);

            // Store token
            localStorage.setItem(
                "token",
                data.token
            );

            // Store user
            localStorage.setItem(
                "user",
                JSON.stringify(data.user)
            );

            alert("✅ Login Successful");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("❌ Invalid Credentials");
        }
    };

    return (
        <div
            style={{
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#f4f4f4"
            }}
        >

            <form
                onSubmit={handleSubmit}
                style={{
                    width: "350px",
                    background: "white",
                    padding: "30px",
                    borderRadius: "10px",
                    display: "grid",
                    gap: "15px",
                    boxShadow:
                        "0 0 10px rgba(0,0,0,0.1)"
                }}
            >

                <h1
                    style={{
                        textAlign: "center"
                    }}
                >
                    Visitor PMS Login
                </h1>

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
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleChange}
                    style={inputStyle}
                    required
                />

                <button
                    type="submit"
                    style={buttonStyle}
                >
                    Login
                </button>

            </form>

        </div>
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

export default Login;