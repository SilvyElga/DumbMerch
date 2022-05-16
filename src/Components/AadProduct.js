import React, { useState, useEffect } from 'react';
import './loginStyle.css';

import {Container, Form, col, Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import NavClient from './NavClient';


function AadProduct () {
    const navigate = useNavigate();

    return (
        <>
        <div className="Container-login">
            <NavClient/>
    <div className="row justify-content-center pt-5">
    <div className="col-10 text-light">
    <div className= "title-product fs-3 my-3">Add Product</div>   
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Button variant="danger" type="upload">
    upload img.
  </Button>
      {/* {preview && ( */}
                <div>
                  <img
                    // src={preview}
                    style={{
                      maxWidth: '150px',
                      maxHeight: '150px',
                      objectFit: 'cover',
                    }}
                    // alt={preview}
                  />
                </div>
              {/* )} */}
 </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control  type="text"
                placeholder="Product Name"
                name="name"
                // onChange={handleChange}
                className="input-edit-category mt-4" />

<Form.Control  type="textarea"
                placeholder="Product Desc"
                name="desc"
                // onChange={handleChange}
                className="input-edit-category mt-4"
                style={{ height: '70px' }}/>

<Form.Control  type="number"
               placeholder="Price (Rp.)"
               name="price"
            //    onChange={handleChange}
               className="input-edit-category mt-4"/>

<Form.Control  type="number"
                placeholder="Stock"
                name="qty"
                // onChange={handleChange}
                className="input-edit-category mt-4"/>
  </Form.Group>
  
  <div className="d-grid gap-2 mt-4">
                <Button type="submit" variant="success" size="md">
                  Add
                </Button>
              </div>
</Form>
</div>
</div>
</div>
    </>
    )
};

export default AadProduct;