import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import "../styles/Home.css";
import vitthalRukmini from "../assets/vitthal_rukmini.jpg";

const Home = () => {
  const [poems, setPoems] = useState([]);

  useEffect(() => {
    const fetchPoems = async () => {
      const poemsCollection = collection(db, "poems");
      const poemsSnapshot = await getDocs(poemsCollection);
      const poemsList = poemsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPoems(poemsList);
    };

    fetchPoems();
  }, []);

  return (
    <div className="home-container">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="site-title">वारकरी नित्य नियम</h2>
        <ul>
          <li><Link to="/">मुख्यपृष्ठ</Link></li>
          <li><Link to="/about">विषय माहिती</Link></li>
          <li><Link to="/admin">प्रशासक लॉगिन</Link></li>
          <li><Link to="/contribute">योगदान द्या</Link></li>
        </ul>
      </nav>

      {/* Hero Section with Image */}
      <div className="hero-section">
        <img src={vitthalRukmini} alt="Vitthal Rukmini" className="hero-image" />
        <div className="hero-text">
          <h1>वारकरी नित्य नियम</h1>
          <p>
            वारकरी नित्य नियम हा वारकरी परंपरेतील भक्तीगीतांचा संग्रह आहे, 
            ज्यामधून दैनिक भक्ती आणि आत्मशिस्तीचा मार्गदर्शन मिळतो.
          </p>
        </div>
      </div>

      {/* Chapters List */}
      <div className="poem-list">
        <h2>🔹 अध्याय पहा 🔹</h2>
        <ul>
          {poems.map((poem) => (
            <li key={poem.id}>
              <Link to={`/poem/${poem.id}`} className="chapter-link">
                📖 {poem.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
