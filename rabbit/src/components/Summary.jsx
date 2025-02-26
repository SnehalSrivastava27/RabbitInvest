import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Summary.css"; // Import the CSS file

export const Summary = () => {
  const id = localStorage.getItem('option');
  const note = localStorage.getItem('note');
  const [user, setUser] = useState();
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
        console.log(response.data);
      })
      .catch(error => { console.log(error); });
  }, [id]);
  
  return (
    <div className="summary-container">
      <div className="summary-card">
        {user ? (
          <div>
            <h1>{user.name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p>
              <strong>Address:</strong>
              {` ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
            </p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ) : (
          <p className="loading">Loading please wait...</p>
        )}
        
        {note && note.trim() !== " " && (
          <div className="note-section">
            <p>{note}</p>
          </div>
        )}
      </div>
    </div>
  );
};