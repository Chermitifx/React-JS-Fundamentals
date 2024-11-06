import { useState } from 'react'
import './App.css'
import axios from "axios" 
import { Routes, Route } from 'react-router-dom'; 
import Login from './login'
import Register from './register'
import Usertasks from './usertasks';
import Welcome from './welcome';
import Addtasks from './addtasks';
import Assigntasks from './assigntask'; 
function App() {

  return (  
    <>

  <Routes> 
   
  <Route path='/' element={<Login />} />
  <Route path='/register' element={<Register />} />
  <Route path='/main' element={<Welcome />} />
  <Route path='/get' element={<Usertasks />} />
  <Route path='/post' element={<Addtasks />} /> 
  <Route path='/patch' element={<Assigntasks />} /> 
  </Routes> 

    </>
  )
} 

export default App
