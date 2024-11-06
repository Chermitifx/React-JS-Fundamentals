import { send } from 'process';
import {React, useState } from 'react';
import axios from 'axios';

function Assigntasks() { 
  const [Status, setStatus] = useState("");
  const [AssignedUser, setAssignedUser] = useState("");
  

  //console.log({ Status,AssignedUser })

  var Update = async()=>{
    try {
     var res = await axios.patch("http://localhost:3001/api/tasks/update",  { Status,AssignedUser })
    
     console.log(res.data);

    
    } catch (error) {
      console.log(error)
    }
    }
     
  return (
    <> 
  <h5> Task Title </h5> 
  <input  type="text" placeholder="task to update" onChange={(e)=>setTitle(e.target.value) }/>
  <h5> Task Status </h5> 
  <input  type="text" placeholder="Status : Pending/In progress/Completed" onChange={(e)=>setStatus(e.target.value) }/>
  <h5> Assign the task : </h5> 
  <input  type="text" placeholder="Username" onChange={(e)=>setAssignedUser(e.target.value) }/>

  <button className="button"  onClick={()=> (Update())}> Update task </button>
  
      </>
  );
}

export default Assigntasks;