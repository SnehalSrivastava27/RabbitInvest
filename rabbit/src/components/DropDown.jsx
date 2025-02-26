import React from "react";
import axios from "axios";
import { useState,useEffect} from "react";
import {useNavigate} from "react-router-dom";
import './DropDown.css'
export const Dropdown=()=>{
    const [user,setUser]=useState([]);
    const [option,setOption]=useState(localStorage.getItem("option")||"");
    const navigate=useNavigate();
    useEffect(()=>{axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {setUser(response.data)
    })
    .catch(error => {console.log(error)})},[]);
    useEffect(() => {
        localStorage.setItem('option',option);
        localStorage.setItem('note'," ");
    }, [option]);
    const next = () => {
        if(option==="Select an Option")
        {
            alert("Please select option");
            return;
        }
        if (option) {
          navigate(`/selected`);
        }
      }
    return(
        <div className="container">
             <div className="dropdown-container card">
           <select value={option} onChange={(e)=>setOption(e.target.value)}>
            <option>Select an Option</option>
            {
                user.map((op)=>(
                    <option key={op.id} value={op.id}>{op.name}</option>
                ))
            }
           </select>
           <br></br>
           <button onClick={()=>next()}>next</button>
           <p>Please selct an option to move ahead</p>
           </div>
        </div>
    )
}
