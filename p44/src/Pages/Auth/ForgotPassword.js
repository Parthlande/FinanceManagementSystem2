import React, { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ForgotPassword = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setMessage("Password reset link has been sent to your email.");
    } else {
      setMessage("Please fill in both fields.");
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div style={{ position: "relative", overflow: "hidden", height: "100vh" }}>
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "#000" } },
          fpsLimit: 60,
          particles: {
            number: { value: 200, density: { enable: true, value_area: 800 } },
            color: { value: "#ffcc00" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: { enable: true, minimumValue: 1 } },
            move: { enable: true, speed: 2 },
          },
          detectRetina: true,
        }}
        style={{ position: "absolute", zIndex: -1, top: 0, left: 0, right: 0, bottom: 0 }}
      />

      {/* Forgot Password Form */}
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div 
          className="card p-4 shadow-lg form-container" 
          style={{ 
            maxWidth: "400px", 
            width: "100%", 
            zIndex: 2, 
            backgroundColor: "rgba(255, 255, 255, 0.1)", // Transparent background
            backdropFilter: "blur(10px)", // Glass effect
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "10px",
            color: "white",
          }}
        >
          <h2 className="neon-text">Forgot Password?</h2>
          <p className="text-muted text-center">Enter your name and email to reset your password.</p>
          {message && <div className="alert alert-info">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label text-white">Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label text-white">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100">Reset Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
