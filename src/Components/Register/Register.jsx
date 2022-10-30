import axios from 'axios';
import Joi from 'joi';
import React, { useState } from 'react'

export default function Register() {
let[error,SetError]=useState('');
  let[loading,setLoading]=useState(false);
    let[user,setuser]=useState({
        first_name:'',
        last_name:'',
        age:0,
        Email:'',
        password:'',
    })

function getUser(e)
{
  console.log("hello");
 let MyUser= {... user};
 user[e.target.name]=e.target.value;
 setuser(MyUser);
 console.log(user);

}

function ValidateUser(user)
{
 let schema=Joi.object({
  first_name:Joi.string().alphanum().required().max(10).min(4),
  last_name:Joi.string().alphanum().required().max(10).min(4),
  password:Joi.string().pattern(/[A-Z][0-9]{3,8}$/),
 })

 return schema.validate(user);
}

async function Register(e)
{
    e.preventDefault();
   let validate= ValidateUser(user);
  SetError(validate.error.details[0].message);
   //  await axios.post(`https://newsapi.org/v2/everything?q=tesla&from=2022-08-18&sortBy=publishedAt&apiKey=6318fdc6db2148f0926c02b42e973518`,user)
   
    }
  return (
    <div>

      {error?<div className="alert alert-danger">{error}</div>:''}
<div className="container">
<form className='my-3' onSubmit={Register}>
    <label htmlFor='first-name'className='mb-2' >FirstName:</label>
    <input onChange={getUser}  className='form-control' type="text" name='first-name' id='first-name'/>

    <label htmlFor='last-name'className='mb-2' >LastName:</label>
  <input onChange={getUser} className='form-control' type="text" name='last-name' id='last-name'/>

    <label htmlFor='age'className='mb-2' >age:</label>
    <input onChange={getUser} className='form-control' type="text" name='age' id='age'/>

    <label htmlFor='email'className='mb-2' >email:</label>
    <input onChange={getUser} className='form-control' type="text" name='email' id='email'/>

    <label htmlFor='password'className='mb-2' >Password:</label>
    <input onChange={getUser} className='form-control' type="text" name='password' id='password'/>

  <button type='Submit' className='btn btn-primary mt-2'>{loading?<i className='fas fa-spinner fa-spin'></i>:<div>Register</div>}</button>

</form>
</div>

    </div>
  )
}
