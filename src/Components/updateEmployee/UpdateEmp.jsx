import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router';
export default function UpdateEmp() {

  let params=useParams();
let[Employee,setformobject]=useState({
    first_name:'',
    last_name:'',
    username:'',
    isActive:true
});

let navigate=useNavigate();


async function submitFormData(e) {
    e.preventDefault();
            let user = await axios.put(`https://localhost:5001/Employee/${params.id}`, Employee); 
            navigate(`/Home`);
            console.log(Employee);
        
}


useEffect(() => {
  submitFormData();
}, [Employee]);



function getData(e) {
    let newData = { ...Employee }
    let x = e.target.name
    newData[x] = e.target.value
    setformobject(newData)
    console.log(newData)
}



  return (

    <div>
       
        <div className="container">
<form onSubmit={submitFormData}>
<div className="mb-3">
  <label htmlFor="first_name" className="form-label">first_name</label>
  <input type="text" onChange={getData} className="form-control"  id="first_name" name='first_name' />
</div>
<div className="mb-3">
  <label htmlFor="last_name" className="form-label">last_name</label>
  <input type="text" onChange={getData} className="form-control" id="last_name" name='last_name'/>
</div>

<div className="mb-3">
  <label htmlFor="username" className="form-label">username</label>
  <input type="text" onChange={getData} className="form-control" id="username" name='username'/>
</div>


<button  className='float-end btn-info btn' type='submit'>Submit</button>
                    <div className="clearfix"></div>

</form>

  
        </div>
    </div>
  )
}
