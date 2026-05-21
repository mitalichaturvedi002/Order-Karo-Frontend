import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "./Login";
import Signup from "./Signup";
import Navbar from "./Navbar";
import "./App.css";

function Home() {
  const parkingTypes = [
    {
      title: "Bike Parking",
      icon: "🏍️",
      slots: "120 Slots Available",
      fee: "₹20 / Hour",
      color: "#38bdf8",
    },
    {
      title: "Car Parking",
      icon: "🚗",
      slots: "250 Slots Available",
      fee: "₹50 / Hour",
      color: "#22c55e",
    },
    {
      title: "Auto Parking",
      icon: "🛺",
      slots: "80 Slots Available",
      fee: "₹30 / Hour",
      color: "#f59e0b",
    },
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo">P</div>
          <h2>Smart Parking</h2>
        </div>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search Parking..."
          />
          <button>Search</button>
        </div>

        <div className="nav-buttons">
          <button className="about-btn">About</button>
          <button className="login-btn">Login</button>
        </div>
      </nav>
      <Navbar />

      {/* Hero */}
      <section className="hero">
        <h1>Smart Vehicle Parking System</h1>

        <p>
          Manage Bike, Car and Auto Parking Easily
        </p>
      </section>

      {/* Parking Cards */}
      <section className="parking-section">
        <div className="parking-grid">
          {parkingTypes.map((item, index) => (
            <div
              className="parking-card"
              key={index}
              style={{
                border: `2px solid ${item.color}`,
              }}
            >
              <div
                className="parking-icon"
                style={{
                  background: item.color,
                }}
              >
                {item.icon}
              </div>

              <h2>{item.title}</h2>

              <p>{item.slots}</p>

              <div
                className="fee-box"
                style={{
                  background: `${item.color}22`,
                  color: item.color,
                }}
              >
                Parking Fee: {item.fee}
              </div>

              <button
                style={{
                  background: item.color,
                }}
              >
                View Parking
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/login"
          element={
            <>
              <Navbar />
              <Login />
            </>
          }
        />

        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;