import React from 'react'

// import necessary object from react-router-dom
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';
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
import PrivateRoute from './Components/PrivateRoute';

// import Compnav from './Components/Compnav';
import logo from './Components/pic/logo.jpeg';




function App() {
  return (
    <BrowserRouter>
      <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home"><img className="card-img-top justify-content-center"  src={logo}alt="" style={{width: '40px'}}/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <Nav.Link as={Link} to={"/"} ></Nav.Link>
    <Nav.Link as={Link} to={"/Register"} ></Nav.Link>
    <Nav.Link as={Link} to={"/Product"} ></Nav.Link>
      <Nav.Link as={Link} to={"/Complain"} >Complain</Nav.Link>
      <Nav.Link as={Link} to={"/Profile"} >Profile</Nav.Link>
      <Nav.Link as={Link} to={"/Category"} >Category</Nav.Link>
      <Nav.Link as={Link} to={"/Productb"} >Product</Nav.Link>
      <Nav.Link as={Link} to={"/"} >Logout</Nav.Link>
      <Nav.Link as={Link} to={"/Detail"} ></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/" element={<PrivateRoute/>}>
        <Route path="/Product" element={<Product/>} />
        <Route path="/Profile" element={<Profile/>} />
        <Route path="/Complain" element={<Complain/>} />
        <Route path="/Category" element={<Category/>} />
        <Route path="/Productb" element={<Productb/>} />
        <Route path="/Detail" element={<Detail/>} />
        <Route path="/Loguot" element={<Logout/>} />
        
        
        </Route> 
        
      </Routes>
    </BrowserRouter>
  );
}



export default App;