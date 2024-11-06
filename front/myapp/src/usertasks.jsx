import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from "axios" 
import { Link } from 'react-router-dom';
import Onetask from './onetask'; 



function Usertasks() { 
  const [Data, SetData] = useState([])
  const [Name, SetName] = useState("")
  const [Role, SetRole] = useState("")
  const [email,setEmail]=useState("")
  // localStorage.setItem("MyEmail",Email );
  useEffect(()=>{
         
         const Email = localStorage.getItem("MyEmail");
if(Email){
  setEmail(Email)
}
else{
  console.log('no email')
}
          // console.log(Email)
          // setEmail(Email)
    GetUserName() 
    GetTasks()
     },[])
     useEffect(()=>{
if(email){
  GetUserName()
}
     },[email])
      

     useEffect(() => {
      if (Name || Role) {
          GetTasks();
      }
  }, [Name, Role]);
        const GetUserName = async () => {
          try {
              const res = await axios.get(`http://localhost:3001/api/users/getUsername?Email=${email}`
            );
             // console.log(email)
              SetName(res.data.name ); 
              SetRole(res.data.role );
            } catch (error) {
              console.error(error);           }
      };        

  var GetTasks = async()=>{
    try {
      var dat 
      if(Role==="admin") {
     var res = await axios.get("http://localhost:3001/api/tasks/get?role="+Role.toString()) 
     dat = res// AssignedUser // role=admin
      }
      else { var ress = await axios.get("http://localhost:3001/api/tasks/get?name="+Name.toString())
        
        dat =ress 
        // AssignedUser // role=admin
      }
      SetData(dat.data);

     
    } catch (error) {
      console.error(error)
    }
    }

  


  return (
    <> 
    <div className='login'>
    <h2  > The following is Your task section </h2>
    <div div className="Tasks" >
       {Data.map((element,i)=>{
      //  console.log(element)
          return ( <Onetask key={i}  Task={element} />) })} 
    </div>
          
    </div>
      </>
  );
}

export default Usertasks;

