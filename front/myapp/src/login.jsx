import React from 'react';
import Register from './register'
import { useState } from 'react';
import axios from "axios" 
import { Link } from 'react-router-dom';

function Login() {
  const [Email, setEmail] = useState("");  
  const [Password, setPassword] = useState("");

  var SendData = async()=>{
    try {
     var res = await axios.post("http://localhost:3001/api/users/login",{Password, Email })
    
     console.log(res.data);
    
    } catch (error) {
      console.log(error)
    }
    }

    localStorage.setItem("MyEmail",Email );


  return (
    <> 
    <div className='login'>
    <h2> Task Manager </h2> 
    <h5> Email  </h5> 
    <input  type="text" placeholder="exp user@gmail.com" onChange={(e)=>setEmail(e.target.value) }/>
    <h5> Password </h5> 
    <input  type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value) }/>
    <h6>Forget Password ?</h6>

    <button className="button" onClick={()=> (SendData()) }><Link style={{ color: 'white', textDecoration: 'none' }}  to="/main"> Sign In </Link> </button>

    <p>New to Task Manager? <button className='signup'> <Link  style={{ color: 'white', textDecoration: 'none' }}  to="/register">Sign Up!</Link></button> </p>

    </div>
      </>
  );
}

export default Login;
