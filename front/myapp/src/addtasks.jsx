import { send } from 'process';
import {React, useState } from 'react';
import axios from 'axios';

function Addtasks() {
  const [Title, setTitle] = useState("");  
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState("");
  const [AssignedUser, setAssignedUser] = useState("");
  

  console.log({Title , Description, Status,AssignedUser })

  var AddNew = async()=>{
    try {
     var res = await axios.post("http://localhost:3001/api/tasks/add",  {Title , Description, Status,AssignedUser })
    
     console.log(res.data);

    
    } catch (error) {
      console.log(error)
    }
    }
     
  return (
    <> 
    <div className='login'> 
    <h2> Task Details </h2>

  <h5> Task Title </h5> 
  <input  type="text" placeholder="new task" onChange={(e)=>setTitle(e.target.value) }/>
  <h5> Set Description of the task : </h5> 
  <input  type="text" placeholder="task description " onChange={(e)=>setDescription(e.target.value) }/>
  <h5> Task Status </h5> 
  <input  type="text" placeholder="Status : Pending/In progress/Completed" onChange={(e)=>setStatus(e.target.value) }/>

  <h5> Assign the task : </h5> 
  <input  type="text" placeholder="Username" onChange={(e)=>setAssignedUser(e.target.value) }/>

  <button className="button" onClick={()=> (AddNew())}> Add New task </button>
  </div>
      </>
  );
}

export default Addtasks;