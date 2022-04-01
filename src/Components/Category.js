import React from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';



const Category = () =>{

    const products = [
    {no:"1", categoryname:"Mouse"},
    {no:"2", categoryname:"Keyboard"},
    {no:"3", categoryname:"Bag"},
    {no:"4", categoryname:"Stationary"},
    {no:"5", categoryname:"Doll"},
    {no:"6", categoryname:"Pillow"},
    
]
    const renderProduct = (product, index) =>{
        return(
            <tr key={index}>
                <td>{product.no}</td>
                <td>{product.categoryname}</td>
                <td>
                <button type="button" class="btn btn-success btn-sm mx-3">Edit</button>
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>

        );
    };

    return (
        <div className="Container-login">
            <div className='title fs-4 text-light'>List Category</div>
            <ReactBootStrap.Table striped bordered hover variant="dark" >
  <thead>
    <tr>
      <th>No</th>
      <th>Category Name</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    {products.map(renderProduct)}
  </tbody>
</ReactBootStrap.Table>

        </div>    
    )
};

export default Category;