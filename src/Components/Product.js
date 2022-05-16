import React from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';

// import {useNavigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import {Nav,Navbar,Container} from 'react-bootstrap'
import logo from './pic/logo.jpeg'

import NavClient from './NavClient'



function Login () {

    
    const navigate = useNavigate();

    const handleNavigateToDetail = () =>{

        navigate('/Detail')
    }


    

    return (
        
        
        <div className="Container-login text-danger">
            <NavClient/>
        
                <div className= "title-product fs-3">Product</div>
            <div className="d-flex flex-row">
                    <div className="p-2 text-light">
                    <div className="card bg-dark">
                        <img className="card-img-top" src="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg" alt="" style={{width: '200px'}}/>
                            <div className="card-body">
                                 <div className="card-text text-white">
                                     <h2>Mouse</h2>
                                     <p>Rp.500.000</p>
                                     <p>stock: 600</p>
                                 </div>
                                 <button type="button" className="btn btn-danger"onClick={handleNavigateToDetail}>Buy</button>
                            </div>
                            
                    </div>
                    
                    </div>
                    <div class="p-2"> <div className="card bg-dark">
                    <img className="card-img-top" src="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg" alt="" style={{width: '200px'}}/>
                            <div className="card-body">
                                 <div className="card-text text-white">
                                     <h3>Mouse</h3>
                                     <p>Rp.500.000</p>
                                     <p>stock: 600</p>

                                 </div>
                                 <button type="button" className="btn btn-danger"onClick={handleNavigateToDetail}>Buy</button>
                            </div>
                            
                    </div>
                    </div>
                    <div class="p-2"> <div className="card bg-dark">
                    <img className="card-img-top" src="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg" alt="" style={{width: '200px'}}/>
                            <div className="card-body">
                                 <div className="card-text text-white">
                                     <h3>Mouse</h3>
                                     <p>Rp.500.000</p>
                                     <p>stock: 600</p>

                                 </div>
                                 <button type="button" className="btn btn-danger"onClick={handleNavigateToDetail}>Buy</button>
                            </div>
                            
                    </div>
                    </div>
            </div>
            
                 
                    
                    
            
        </div>    
        
    )
};

export default Login;