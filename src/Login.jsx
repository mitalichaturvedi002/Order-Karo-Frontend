import React from "react";
import { Link } from "react-router-dom";

function Login() {
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
        padding: "20px",
        position: "relative",
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

      {/* Login Card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "300px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(8px)",
          borderRadius: "15px",
          padding: "25px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
          color: "white",
        }}
      >
        {/* Heading */}
        <h5 style={{ textAlign: "center", marginBottom: "2px" }}>Login</h5>
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

        {/* Email */}
        <input
          type="email"
          placeholder="Email"
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
        />

        {/* Password */}
        <input
          type="password"
          placeholder="Password"
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
        />

        {/* Login Button */}
        <button
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
          Login
        </button>

        {/* Signup */}
        <p
          style={{
            textAlign: "center",
            marginTop: "18px",
            color: "#d1d5db",
            fontSize: "13px",
          }}
        >
          Don't have an account?{" "}
          <Link
            to="/signup"
            style={{ color: "#60a5fa", textDecoration: "none" }}
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;