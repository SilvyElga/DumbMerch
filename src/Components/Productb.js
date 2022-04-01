import React from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';
import * as ReactBootStrap from 'react-bootstrap';



const Product = () =>{

    const categories = [
    {no:"1", photo:"mouse.jpg", productName:"Mouse", productDes: "lorem ipsum mouse...", price:"500.000", qty:"600"},
    {no:"2", photo:"keyboard.jpg",  productName:"Keyboard", productDes: "lorem ipsum keyboard...", price:"700.000", qty:"600"},
    {no:"3", photo:"bag.jpg",  productName:"Bag", productDes: "lorem ipsum bag...", price:"300.000", qty:"600"},
    {no:"4", photo:"stationary.jpg",  productName:"Stationay", productDes: "lorem ipsum stationary...", price:"25.000", qty:"600"},
    {no:"5", photo:"doll.jpg",  productName:"Doll", productDes: "lorem ipsum doll...", price:"125.000", qty:"600"},
    {no:"6", photo:"pillow.jpg",  productName:"Pillow", productDes: "lorem ipsum pillow...", price:"300.000", qty:"600"},
    
    
]
    const renderCategory = (category, index) =>{
        return(
            <tr key={index}>
                <td>{category.no}</td>
                <td>{category.photo}</td>
                <td>{category.productName}</td>
                <td>{category.productDes}</td>
                <td>{category.price}</td>
                <td>{category.qty}</td>
                <td><button type="button" class="btn btn-success btn-sm mx-3">Edit</button>
                <button type="button" class="btn btn-danger btn-sm">Delete</button>
                </td>
            </tr>

        );
    };

    return (
        <div className="Container-login">
            <div className='title fs-4 text-light mx-5'>List Product</div>
            <div class="table m-4">
            <ReactBootStrap.Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>No</th>
      <th>Photo</th>
      <th>Product Name</th>
      <th>Product Desc</th>
      <th>Price</th>
      <th>Qty</th>
      <th>Action</th>
      
    </tr>
  </thead>
  <tbody>
    {categories.map(renderCategory)}
  </tbody>
</ReactBootStrap.Table>

        </div> 
        </div>   
    )
};

export default Product;