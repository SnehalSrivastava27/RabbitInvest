import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import "./Display.css"; 

export const SelectedPage = () => {
  const navigate = useNavigate();
  const id = localStorage.getItem('option');
  const [user, setUser] = useState();
  
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => {
        setUser(response.data);
      })
      .catch(error => {console.log(error)});
  }, [id]);

  return (
    <div className="selected-container">
      <div className="selected-card">
        {user ? (
          <Fragment>
            <h1>{user.name}</h1>
            <p><strong>Email:</strong> {user.email}</p>
            <p>
              <strong>Address:</strong>
              {` ${user.address.suite}, ${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}
            </p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </Fragment>
        ) : (
          <p className="loading">Loading please wait...</p>
        )}
        <button onClick={() => navigate("/")}>Back</button>
        <p>Want to add a custom note <Link to="/final" className="note-link">Click Here</Link></p>
      </div>
    </div>
  );
};