import React from 'react'

// import necessary object from react-router-dom
import { BrowserRouter, Routes, Route, Switch} from 'react-router-dom';
import {Container, Navbar, Nav} from 'react-bootstrap';



// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// import Login from './Components/Login';
// import "pages" component here
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Product';
import Profile from './Components/Profile';
import Complain from './Components/Complain';
import Logout from './Components/Logout';
import Detail from './Components/Detail';
import Category from './Components/Category';
import Productb from './Components/Productb';
import AddProduct from './Components/AadProduct';
import PrivateRoute from './Components/PrivateRoute';

// import Compnav from './Components/Compnav';
import logo from './Components/pic/logo.jpeg';




function App() {
  return (


    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/AadProduct" element={<AddProduct/>} />
        <Route path="/Product" element={<Product/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Complain" element={<Complain/>} />
        <Route path="/Category" element={<Category/>} />
        <Route path="/Productb" element={<Productb/>} />
        <Route path="/Detail" element={<Detail/>} />
        <Route path="/Logout" element={<Logout/>} />
        
        
        
        
      </Routes>
    </BrowserRouter>
  );
}



export default App;