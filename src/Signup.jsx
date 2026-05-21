import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      // Send request to backend
      const response = await axios.post(
        "http://localhost:1997/auth/register",
        { ...formData, roleId: 2 } // Default roleId = 2 (ROLE_USER)
      );

      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      console.error(err);
      setError(
        err.response?.data?.message || "Something went wrong. Try again."
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506521781263-d8422e82f27a?q=80&w=1974&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        padding: "20px",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.5)",
        }}
      ></div>

      {/* Signup Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "320px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          color: "white",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "8px" }}>Sign Up</h1>
        <p
          style={{
            textAlign: "center",
            color: "#e5e7eb",
            marginBottom: "20px",
            fontSize: "13px",
          }}
        >
          Park your vehicle
        </p>

        {error && (
          <p style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
            {error}
          </p>
        )}
        {success && (
          <p
            style={{ color: "lightgreen", fontSize: "13px", marginBottom: "10px" }}
          >
            {success}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              marginBottom: "12px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              marginBottom: "12px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              marginBottom: "12px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "8px",
              border: "none",
              outline: "none",
              marginBottom: "18px",
              fontSize: "14px",
              boxSizing: "border-box",
            }}
            required
          />

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              background: "#22c55e",
              color: "white",
              border: "none",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Sign Up
          </button>
        </form>

        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
            color: "#d1d5db",
            fontSize: "13px",
          }}
        >
          Already have an account?{" "}
          <Link to="/login" style={{ color: "#60a5fa", textDecoration: "none" }}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;