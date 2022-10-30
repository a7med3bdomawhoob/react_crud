import axios from 'axios';
import joi from 'joi';
import React from 'react'
import { useState } from 'react'
import { useNavigate} from 'react-router';
export default function AddEmployee() {

let[Employee,setformobject]=useState({
    first_name:'',
    last_name:'',
    username:'',

});

let navigate=useNavigate();
let[validateerror,setvalidateerror]=useState([]);


async function submitFormData(e) {
    e.preventDefault();
    let validationResult = validationForm();
        if (validationResult.error) {
            
            setvalidateerror(validationResult.error.details)
            console.log(validateerror)
        }
        else
        {
            let user = await axios.post(`https://localhost:5001/Employee`, Employee); 
            navigate(`/Home`);
            console.log(user);
        }
}

function getData(e) {
    let newData = { ...Employee }
    let x = e.target.name
    newData[x] = e.target.value
    setformobject(newData)
    console.log(newData)
}


function validationForm() {
    const schema = joi.object({
        first_name: joi.string().required().min(3).max(20),
        last_name: joi.string().required().max(20).min(3),
        username: joi.string().required(),
        
    })

    return schema.validate(Employee, { abortEarly: false })
}

  return (

    <div>

       {validateerror? validateerror.map((validation)=><div className='alert alert-warning border '>{validation.message}</div> ):''}
        <div className="container">
<form onSubmit={submitFormData}>
<div className="mb-3" >
  <label htmlFor="first_name" className="form-label">first_name</label>
  <input type="text" onChange={getData} className="form-control"  id="first_name" name='first_name' />
</div>
<div className="mb-3">
  <label htmlFor="last_name" className="form-label">last_name</label>
  <input type="text" onChange={getData} className="form-control" id="last_name" name='last_name' />
</div>

<div className="mb-3">
  <label htmlFor="username" className="form-label">username</label>
  <input type="text" onChange={getData} className="form-control" id="username" name='username' />
</div>


<button  className='float-end btn-info btn' type='submit'>Add Employee</button>
                    <div className="clearfix"></div>

</form>

  
        </div>
    </div>
  )
}
