// import React from 'react';
import  { useState, useEffect } from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';

import Product from './Product'
import dataAdminLogin from './DataAdmin';
import dataUserLogin from './DataUser';
// import GuestGreeting from './GuestGreeting';

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

    /*useEffect(() => {
        console.log('App Component Did Mount');
        console.log(state);
    }, []);

    useEffect(() => {
        if (state.isLogin == true) {
            console.log('App Component Did Update');
            console.log(state);
        }
    }, [state]);*/

    function handleOnSubmit(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email.trim() == "") {
            console.log('Email cannot be empty');
            return;
        }
        if (password.trim() == "") {
            console.log("Password cannot be empty");
            return;
        }

        console.log('dataAdminLogin', dataAdminLogin);
        console.log('dataUserLogin', dataUserLogin);

        /* Check on admin data first */
        const isAdmin = dataAdminLogin.some(admin => {
            return admin.email == email && admin.password == password
        })
        if (isAdmin) {
            setState({
                isLogin: true,
                user: {
                    email,
                    password,
                },
            });
            navigate("/Productb");
            return;
        }

        /* Check on user data, if not exist in admin data */
        const isUser = dataUserLogin.some(user => {
            return user.email == email && user.password == password
        })

        if (isUser) {
            setState({
                isLogin: true,
                user: {
                    email,
                    password,
                },
            });
            navigate("/Product");
        }

        /* Email or password is incorrect */
        console.log('Email or password is incorrect');
    };

    const navigate = useNavigate();

    const handleNavigateToRegister = () => {
        navigate('/Register')
    }

    return (
        <>
        {
            /*{state.isLogin ? (<Product/>) : (<><GuestGreeting/>)*/
        }
            <div className="Container-login">
                <div className="row justify-content-center pt-5">
                    <div className="col-4 text-light">
                        <img className="card-img-top justify-content-center" src={logo}alt="" style={{width: '150px'}} />
                        <h2>Easy Fast and Reliable</h2>
                        <p>Go Shopping for marchendise, just go to dumb merch
                        shopping the biggest merchandise in Indonesia
                        </p>

                        <button type="button" className="btn btn-danger mx-3">Login</button>
                        <button type="button" className="btn btn-dark" onClick={handleNavigateToRegister}>Register</button>
                    </div>

                    <div className="col-4">    
                        <div className="card bg-dark ">
                            <div class="card-body bg-dark">
                                <h5 class="card-title">Login</h5>
                                <form>
                                    <div className="mb-3">
                                        <label for="email" className="form-label"></label>
                                        <input
                                            name="email"
                                            type="email" 
                                            class="form-control" 
                                            id="email" 
                                            placeholder="Email" />
                                    </div>

                                    <div className="mb-3">
                                        <label for="password" className="form-label"></label>
                                        <input 
                                            name="password"
                                            type="password" 
                                            class="form-control" 
                                            id="password" 
                                            placeholder='Password' />
                                    </div>

                                    <div class="d-grid gap-2">
                                        <button class="btn btn-danger" type="submit" onClick={handleOnSubmit}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default Login;