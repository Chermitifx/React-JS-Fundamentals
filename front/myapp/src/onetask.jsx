
import React, { useState } from 'react'
import DropdownList from './dropdown'
import axios from "axios" 
  
function Onetask({Task}){

  const [view,setview]=useState(false)
  const [AssignedUser, setAssignedUser] = useState("not assigned");
  
  const [Status, setStatus] = useState('Pending'); 
  const handleChange = (event) => {setStatus(event.target.value);};

 //console.log(Status)
  var AssignUser = async()=>{
    try {
     var res = await axios.patch("http://localhost:3001/api/tasks/assign/"+Task._id.toString(), { AssignedUser })
     console.log(res.data);
    } catch (error) {
      console.log(error)
    }
    }

    var UpdateStatus = async()=>{
      try {
       var res = await axios.patch("http://localhost:3001/api/tasks/update/"+Task._id.toString(), { Status})
       console.log(res.data);
      } catch (error) {
        console.log(error)
      }
      }
    
  return (
    <>
{view ? (
  <>
        <div className='task-previou' >
        <h2>Title : {Task.Title}<button  className='Button2' onClick={() => setview(!view)} > Update Task </button> </h2>

        <h3> Description : {Task.Description}   </h3>
        <h3>AssignedUser : <input  className="inputss" type="text" placeholder="Username" onChange={(e)=>setAssignedUser(e.target.value) }/> 
            <button className='Button2' onClick={() => AssignUser()} > Update </button></h3>  
        <h3>Status : 
        <select className='dropdown' value={Status} onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In progress">In progress</option>
          <option value="Completed">Completed</option>
          </select>
          <button className='Button2' onClick={() => UpdateStatus()} > Update </button>          
             </h3>

        
        

         </div>
   </>   ) : ( 
      <>

      <div className='task-previou' >
     
      <h2> Title : {Task.Title} <button className='Button2' onClick={() => setview(!view)} > Update Task </button> </h2> 
      <h3> Description :  {Task.Description}   </h3>
      <h3> AssignedUser : {Task.AssignedUser} </h3>  
      <h3> Status :{Task.Status} </h3>
       </div>
 </> 

    )}


  </>
  )
}

export default Onetask 
 