import React, {useContext} from 'react'
import {Nav,Navbar,Container} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

import logo from './pic/logo.jpeg'



function NavClient(props) {

    let navigate = useNavigate()

    const logout = () => {
        console.log(state)
        dispatchEvent({
            type:'LOGOUT'
        })
        navigate('/Login')
    }

    
  return (
    <div>

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Container>
<Navbar.Brand href="#home"><img className="card-img-top justify-content-center"  src={logo}alt="" style={{width: '40px'}}/></Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
  <Nav className="me-auto">
  </Nav>
  <Nav>
 
    <Nav.Link as={Link} to="/Complain" className={props?.tittle=='Complain'} >Complain</Nav.Link>
    <Nav.Link as={Link} to="/Profile" className={props?.tittle=='Profile'}>Profile</Nav.Link>
    <Nav.Link onClick={logout} className='text-navbar'>Logout</Nav.Link>

    
  </Nav>
</Navbar.Collapse>
</Container>
</Navbar>

    </div>
  )
}

export default NavClient