// import React from 'react';
import  { useState, useEffect } from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';

import Product from './Product'
import GuestGreeting from './GuestGreeting';

import {useNavigate} from 'react-router-dom';
import logo from './pic/logo.jpeg'





function Login () {
    const [state, setState] = useState({
        isLogin: false,
        user: {
            email: '',
            password: '',
        },
    });

    useEffect(() => {
        console.log('App Component Did Mount');
        console.log(state);
        },[]);

    useEffect(() =>{
        if(state.isLogin == true ){
            console.log('App Component Did Update');
            console.log(state);    
        }
    }, [state]);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        setState({
            isLogin: true,
            user: {
                email,
                password,
            },
        });
    };

    
    

    const navigate = useNavigate();

    const handleNavigateToRegister = () =>{

        navigate('/Register')
    }

    

    return (
        <>
        {state.isLogin ? (
            <Product/>
        ) : (
            <>
            <GuestGreeting/>
            <div className="Container-login">

           <div className="row justify-content-center pt-5">
            <div className="col-4 text-light">
            <img className="card-img-top justify-content-center"  src={logo}alt="" style={{width: '150px'}}/>
            <h2> Easy Fast and Reliable</h2>
                 <p>Go Shopping for marchendise, just go to dumb merch
                     shopping the biggest merchandise in Indonesia
                 </p>
                 
                 <button type="button" className="btn btn-danger mx-3" >Login</button>
                <button type="button" className="btn btn-dark"onClick={handleNavigateToRegister}>Register</button>
                
                </div>

                 <div className="col-4">
                    
                    
                    <div className="card bg-dark ">
                        <div class="card-body bg-dark">
                            <h5 class="card-title">Login</h5>
                            <form onSubmit={handleOnSubmit} >
                                <div className="mb-3">
                                     <label for="email" className="form-label"></label>
                                    <input 
                                    name="email"
                                    type="email" 
                                    class="form-control" 
                                    id="email" 
                                    placeholder="Email"/>
   
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label"></label>
                                    <input 
                                    name="password"
                                    type="password" 
                                    class="form-control" 
                                    id="password" 
                                    placeholder='Password'/>
                                </div>

                                <div class="d-grid gap-2">
                                 <button class="btn btn-danger" type="submit">Login</button>

                                </div>
  
                                 {/* <button type="submit" className="btn btn-danger">Submit</button> */}
                            </form>
                        </div>
                    </div>
                
                    
                    </div>
            </div>
        </div> 
        </>   
        )}
        </>
        
    )
};

export default Login;