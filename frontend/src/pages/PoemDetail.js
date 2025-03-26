import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import "../styles/PoemDetail.css"; // Add styling if needed

const PoemDetail = () => {
  const { id } = useParams(); // Get document ID from URL
  const [poem, setPoem] = useState(null);

  useEffect(() => {
    const fetchPoem = async () => {
      try {
        const poemRef = doc(db, "poems", id); // Fetch the specific document
        const poemSnap = await getDoc(poemRef);

        if (poemSnap.exists()) {
          setPoem(poemSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching poem:", error);
      }
    };

    fetchPoem();
  }, [id]);

  if (!poem) return <h2>लोड करत आहे...</h2>;

  return (
    <div className="poem-container">
      <h2>{poem.title}</h2>
      <p>{poem.content}</p>
    </div>
  );
};

export default PoemDetail;
