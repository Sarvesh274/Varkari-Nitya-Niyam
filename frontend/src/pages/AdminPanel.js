import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";
import "../styles/AdminPanel.css"; // Ensure correct styles

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [poems, setPoems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPoems = async () => {
      try {
        const q = query(collection(db, "poems"), orderBy("createdAt", "asc")); // Sort by createdAt (ascending)
        const querySnapshot = await getDocs(collection(db, "poems"));
        const poemsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPoems(poemsData);
      } catch (error) {
        console.error("Error fetching poems:", error);
      }
    };

    fetchPoems();
  }, []);

  const handleAddChapter = async () => {
    if (!title || !content) {
      alert("कृपया सर्व फील्ड भरा!");
      return;
    }

    try {
      const docRef = await addDoc(collection(db, "poems"), {
        title,
        content,
        createdAt: serverTimestamp(), // Add timestamp for sorting
      });

      alert("अध्याय यशस्वीरित्या जोडला!");

      setPoems([...poems, { id: docRef.id, title, content, createdAt: new Date() }]);
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding chapter:", error);
      alert("अध्याय जोडताना त्रुटी: " + error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      alert("यशस्वीरित्या लॉगआउट झाले!");
      navigate("/"); // Redirect to Home
    } catch (error) {
      console.error("Error logging out:", error);
      alert("लॉगआउट करताना त्रुटी: " + error.message);
    }
  };

  return (
    <div className="admin-panel">
      <h2>🎵 प्रशासक पॅनेल 🎵</h2>

      <div className="form-container">
        <input
          type="text"
          placeholder="अध्याय शीर्षक..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="अध्याय मजकूर..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button className="add-chapter" onClick={handleAddChapter}>
          ➕ नवीन अध्याय जोडा
        </button>
      </div>

      <h3>🌿 अध्याय सूची 🌿</h3>
      <ul className="poem-list">
        {poems.map((poem) => (
          <li key={poem.id}>{poem.title}</li>
        ))}
      </ul>

      <button className="logout-button" onClick={handleLogout}>
        🚪 लॉगआउट
      </button>
    </div>
  );
};

export default AdminPanel;
