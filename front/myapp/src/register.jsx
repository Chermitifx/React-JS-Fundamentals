import { send } from 'process';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function Register() {
  const [Email, setEmail] = useState("");  
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [  Role ,setRole] = useState("user")
  console.log(  {Username, Email, Password } )

  var RegisterNew = async()=>{
    try {
     var res = await axios.post("http://localhost:3001/api/users/register",  {Email , Username, Password , Role })
    
     console.log(res.data);

    
    } catch (error) {
      console.log(error)
    }
    }
     
  return (
    <> 
  <div className='login'> 
    
  <h2> Task Manager </h2> 
  
  <h5> Email  </h5> 
  <input  type="text" placeholder="exp user@gmail.com" onChange={(e)=>setEmail(e.target.value) }/>
  <h5> Username </h5> 
  <input  type="text" placeholder="exp Bechir123" onChange={(e)=>setUsername(e.target.value) }/>
  <h5> Password </h5> 
  <input  type="text" placeholder="Password" onChange={(e)=>setPassword(e.target.value) }/>
  <h5> Role  </h5> 
  <input  type="text" placeholder="admin/user" onChange={(e)=>setRole(e.target.value) }/>


  <button className="button" onClick={()=> (RegisterNew())}> Sign Up </button>
  </div>
      </>
  );
}

export default Register;