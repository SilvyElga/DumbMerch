import React from 'react';
import './loginStyle.css';
import {container, Col, Button, Table} from 'react-bootstrap';
// import * as ReactBootStrap from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import NavClient from './NavClient';


const Product = () =>{
  const navigate = useNavigate();

  return (

    <>
        <div className="Container-login">
            <NavClient/>
    <div className="row justify-content-center pt-5">
    <div className="col-10 text-light">
    <div className= "title-product fs-3 my-3">Add Product</div>  

    <Col xs="6" className="text-end">
            <Button
              // onClick={addProduct}
              className="btn-dark"
              style={{ width: '100px' }}
            >
              Add
            </Button>
          </Col>

  <Table striped bordered hover variant="dark">
  
  <thead>
    <tr>
      <th>No</th>
      <th>Photo</th>
      <th>Desc</th>
      <th>Price</th>
      <th>Qyt</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Larry the Bird</td>
      <td>@twitter</td>
      <td>@twitter</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
  </tbody>
</Table>

</div>
</div>
</div>
    </>
  )
    
};

export default Product;