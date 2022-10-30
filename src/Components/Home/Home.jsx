import axios from 'axios';
import { async } from 'q';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


export default function Home() {


  let navigate=useNavigate();


  let [formdata, setformdata] = useState([]);
  let[getid,setgetid]=useState(0);

  async function getemployees(){
    let allemp=await axios.get("https://localhost:5001/Employee/GetAllEmployees");
    console.log(allemp.data);
    var allvalues= allemp.data;
    setformdata(allvalues);
    console.log(formdata);
   
  }
  let x;
  async function deleteEmp(id){
    let allemp=await axios.delete(`https://localhost:5001/Employee/${id}`);
     setgetid(allemp.data.id);
     
  }

 

  
 function Check()
  {
    var i;
    for( i=0; i<5; i++);
    console.log(i);
  }
 

  useEffect(() => {
    getemployees();
    return () => {
        deleteEmp(getid);
        console.log("will UN mOUNT ")
        console.log(getid);
    }

}, [])

  return (
    <div>



<button onClick={Check()}>click check</button>



<div className="divcolor">
<Link className='bg-warning' to='AddEmployee'> <i className='fas fa-plus'></i>Add Employee</Link>
</div>
<table className='table'>
  <thead>
    <tr>
    <th scope="col">index</th>
      <th scope="col">first_name</th>
      <th scope="col">last_name</th>
      <th scope="col">username</th>
      <th scope="col">Delete</th>
      <th scope="col">Update</th>
    </tr>
  </thead>
  <tbody>
  {formdata.map((emp , index)=>
      <tr key={emp.id}>
      <th scope="row">{index+1}</th>
      <td>{emp.first_name}</td>
      <td>{emp.last_name}</td>
      <td>{emp.username}</td>
      <td><button className='btn btn-danger' onClick={()=>deleteEmp(emp.id)}>Delete</button></td>
      <td><Link  to={`/UpdateEmp/${emp.id}`} className='btn btn-danger' > Update</Link></td> 
    </tr>)}
 
  </tbody>
</table>
    </div>
  )
}
