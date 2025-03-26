import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const chapters = Array.from({ length: 30 }, (_, i) => `Chapter ${i + 1}`);

const PoemList = () => {
  return (
    <div className="poem-list">
      <h2>Explore the Chapters</h2>
      <ul>
        {chapters.map((chapter, index) => (
          <li key={index}>
            <Link to={`/poem/${index + 1}`}>{chapter}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PoemList;
