import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // Ensure correct Firebase import
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      alert("✅ लॉगिन यशस्वी!"); // Success message
      navigate("/admin-panel"); // Redirect after login
    } catch (err) {
      setError("❌ चुकीचे ईमेल किंवा पासवर्ड! कृपया पुन्हा प्रयत्न करा.");
    }
  };

  return (
    <div className="admin-login-container">
      <div className="login-box">
        <h2>प्रशासक लॉगिन</h2>
        {error && <p className="error-message">{error}</p>}
        
        <form onSubmit={handleSubmit}>
          <label>📧 Email ID किंवा Username</label>
          <input
            type="email"
            name="email"
            placeholder="example@gmail.com"
            value={credentials.email}
            onChange={handleChange}
            required
          />

          <label>🔑 पासवर्ड</label>
          <input
            type="password"
            name="password"
            placeholder="********"
            value={credentials.password}
            onChange={handleChange}
            required
          />

          <button type="submit">🔓 लॉगिन करा</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
