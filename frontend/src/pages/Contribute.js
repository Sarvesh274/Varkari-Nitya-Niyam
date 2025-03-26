import React, { useState } from "react";
import "../styles/Contribute.css";

const Contribute = () => {
  const [contact, setContact] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("धन्यवाद! तुमचा प्रतिसाद नोंदवला गेला आहे.");
    setContact({ name: "", email: "", message: "" });
  };

  return (
    <div className="contribute-container">
      <h2>🌿 आमचे योगदानकर्ते 🌿</h2>
      <div className="contributors">
        <div className="contributor-card">
          <h3>सर्वेश शेंडकर</h3>
          <p>विकसक आणि संशोधक - वारकरी नित्य नियम प्रकल्प</p>
        </div>
        <div className="contributor-card">
          <h3>🎶 दुसरे योगदानकर्ते</h3>
          <p>या प्रकल्पासाठी सहकार्य करणारे.</p>
        </div>
      </div>

      <h2>📌 पुढील प्रकल्प: वारकरी भजनी मलिका 🎶</h2>
      <p>
      या जगातील प्रत्येकापर्यंत विठ्ठल भक्ती पोहोचवण्यासाठी आम्ही आमच्या पुढील प्रकल्पावर काम करत आहोत जो वारकरी भजनी मलिका आहे, जिथे प्रत्येकजण मजकूर आणि भाषांतर वाचून आणिś भक्तांचे काही ऑडिओ ऐकून अभंग वाचू, समजू आणि गाऊ शकतो. जर तुम्हाला या पवित्र कार्यासाठी योगदान द्यायचे
        असेल, तर कृपया तुमचा संपर्क खाली भरा.
      </p>

      <form onSubmit={handleSubmit}>
        <label>👤 तुमचे नाव</label>
        <input type="text" name="name" value={contact.name} onChange={handleChange} required />

        <label>📧 ईमेल</label>
        <input type="email" name="email" value={contact.email} onChange={handleChange} required />

        <label>💬 तुमचा संदेश</label>
        <textarea name="message" value={contact.message} onChange={handleChange} required />

        <button type="submit">संपर्क पाठवा</button>
      </form>
    </div>
  );
};

export default Contribute;
