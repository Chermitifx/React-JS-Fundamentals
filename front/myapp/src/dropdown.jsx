import React, { useState } from 'react'; // Importing Modules
// Creating a function to track the changes in DropDown List
function DropdownList() { 
//Using useState to set the defualt value of DropDown Menu and declare the values
 const [DDvalue, setDDValue] = useState(''); 
  const handleChange = (event) => {
    setDDValue(event.target.value);};
return (
 <select value={DDvalue} onChange={handleChange}>
 <option value="Pending">Pending</option>
 <option value="In progress">In progress</option>
 <option value="Completed">Completed</option>
 </select>
 );
}
export default DropdownList;
