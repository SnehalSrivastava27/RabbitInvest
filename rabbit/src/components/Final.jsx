import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./FinalPage.css";

export const FinalPage = () => {
  const navigate = useNavigate();
  const [note, setNote] = useState(localStorage.getItem("note") || "");
  function handle(){
    if(!note.trim()) {
        alert("Form is Empty");
        return;
      }
      localStorage.setItem("note", note);
      navigate("/summary");
  }
  return (
    <div className="final-container">
      <div className="final-card">
        <h2>Add Your Note</h2>
        <textarea
           onKeyDown={(e) => {
            if (e.key === "Enter")
                handle();
            }}
          placeholder="Enter your note here..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <button 
          className="button"
          onClick={() => {
            handle();
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
};