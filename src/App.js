import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar.jsx';
import Footer from './Components/Footer/Footer';
import {Routes,Route} from 'react-router-dom';
import UpdateEmp from './Components/updateEmployee/UpdateEmp';
import AddEmployee from './Components/AddEmployee/AddEmployee';
export default class App extends Component {
  render() {
    return (
      
      <div>
        <Navbar/>
       <Routes>
       
     <Route path="/Home" element={<Home/>} />
   
  
     <Route path="/UpdateEmp" element={<UpdateEmp/>}  >
     <Route path=':id' element={<UpdateEmp/>} />
     </Route>
     <Route path='Home/AddEmployee' element={<AddEmployee/>}/>
  
       </Routes>
       
        <Footer/>
      </div>


 
    )
  }
}


