// import React from 'react';
import { useState } from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import logo from './pic/logo.jpeg'


function Register () {

    const navigate = useNavigate();

    const handleNavigateToLogin = () =>{

        navigate('/')
    }
    
    const [state, setState] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleOnChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleOnSubmit = (e) => {
        e.preventDefault();
        console.log(state);
    };

    return (
        <div className="Container-login">
           <div className="row justify-content-center pt-5">
            <div className="col-4 text-light">
            <img className="card-img-top"  src={logo}alt="" style={{width: '150px'}}/>
                 <h2> Easy Fast and Reliable</h2>
                 <p>Go Shopping for marchendise, just go to dumb merch
                     shopping the biggest merchandise in Indonesia
                 </p>
                 <button type="button" className="btn btn-danger mx-3"onClick={handleNavigateToLogin} >Login</button>
                <button type="button" className="btn btn-dark">Register</button>
                </div>
                 <div className="col-4">
                    <div className="card bg-dark ">
                        <div class="card-body bg-dark">
                            <h5 class="card-title">Register</h5>
                            <form onSubmit={handleOnSubmit}> 
                                <div className="mb-3">
                                     <label for="input-name" className="form-label"></label>
                                    <input 
                                    onChange={handleOnChange}
                                    value={state.name}
                                    name="name"
                                    type="text"
                                     class="form-control" 
                                     id="input-name" 
                                     placeholder="Name"/>
   
                                </div>
                               
                                <div className="mb-3">
                                    <label for="input-email" className="form-label"></label>
                                    <input 
                                    onChange={handleOnChange}
                                    value={state.email}
                                    name="email"
                                    type="email"
                                     class="form-control" 
                                     id="input-email" 
                                     placeholder="email"/>
                                </div>

                                <div className="mb-3">
                                    <label for="input-password" className="form-label"></label>
                                    <input 
                                   onChange={handleOnChange}
                                   value={state.password}
                                   name="password"
                                   type="password"
                                    class="form-control" 
                                    id="input-pasword" 
                                    placeholder="pasword"/>
                                </div>
                                <div class="d-grid gap-2">
                                 <button class="btn btn-danger" type="submit">Register</button>

                                </div>
                            </form>
                        </div>
                    </div>
                
                    
                    </div>
            </div>
        </div>    
    )
};

export default Register;