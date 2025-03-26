// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
// import "../styles/AdminLogin.css";

// const AdminLogin = () => {
//   const [credentials, setCredentials] = useState({ email: "", password: "" });
//   const navigate = useNavigate(); // ✅ Initialize useNavigate()

//   // ✅ Redirect to Admin Panel if already logged in
//   useEffect(() => {
//     if (localStorage.getItem("isAdminLoggedIn") === "true") {
//       navigate("/admin-panel");
//     }
//   }, [navigate]);

//   const handleChange = (e) => {
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (credentials.email === "shendkarsarvesh27@gmail.com" && credentials.password === "Sarvesh") {
//       alert("✅ लॉगिन यशस्वी!");
//       localStorage.setItem("isAdminLoggedIn", "true"); // ✅ Store login status
//       navigate("/admin-panel"); // ✅ Redirect to Admin Panel
//     } else {
//       alert("❌ चुकीचे ई-मेल किंवा पासवर्ड!");
//     }
//   };

//   return (
//     <div className="admin-login-container">
//       <div className="login-box">
//         <h2>प्रशासक लॉगिन</h2>
//         <p>प्रशासनास मिळणारे विशेष अधिकार:</p>
//         <ul>
//           <li>अध्याय व्यवस्थापन</li>
//           <li>नवीन भक्तीगीते अपलोड व सुधारणा</li>
//           <li>योगदान पुनरावलोकन व मान्यता</li>
//           <li>सुरक्षित लॉगिन व नियंत्रण</li>
//         </ul>

//         <form onSubmit={handleSubmit}>
//           <label>Email ID किंवा Username</label>
//           <input
//             type="text"
//             name="email"
//             placeholder="example@gmail.com"
//             value={credentials.email}
//             onChange={handleChange}
//             required
//           />

//           <label>पासवर्ड</label>
//           <input
//             type="password"
//             name="password"
//             placeholder="********"
//             value={credentials.password}
//             onChange={handleChange}
//             required
//           />

//           <button type="submit">लॉगिन करा</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; // ✅ Ensure correct Firebase import
import "../styles/AdminLogin.css";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful! ✅");
      navigate("/admin-panel"); // ✅ Redirect to Admin Panel after login
    } catch (err) {
      setError("Invalid credentials! कृपया पुन्हा प्रयत्न करा.");
    }
  };

  return (
    <div className="admin-login-container">
      <h2>प्रशासक लॉगिन</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="ईमेल"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="पासवर्ड"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">लॉगिन</button>
      </form>
    </div>
  );
};

export default AdminLogin;
