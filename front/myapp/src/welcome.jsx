import React from 'react';
import Register from './register'
import { useState } from 'react';
import axios from "axios" 
import { Link } from 'react-router-dom';

function Welcome() {
  const [Email, setEmail] = useState("");  
  const [Password, setPassword] = useState("");

  const MyEmail = localStorage.getItem("MyEmail");
  console.log(MyEmail)
 
  return (
    <> 
    <div className='login'>


<h2>Welcome to Task Manager </h2> 

    <button className="button" ><Link style={{ color: 'white', textDecoration: 'none' }} to="/get"> Get Tasks </Link> </button>
    <button className="button" ><Link style={{ color: 'white', textDecoration: 'none' }} to="/post"> Add new Task</Link> </button>
       </div>
      </>
  );
}

export default Welcome;
