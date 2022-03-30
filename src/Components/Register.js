import React from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import logo from './pic/logo.jpeg'


function Register () {

    const navigate = useNavigate();

    const handleNavigateToLogin = () =>{

        navigate('/')
    }

    return (
        <div className="Container-login">
           <div className="row justify-content-center pt-5">
            <div className="col-4 text-light">
            <img className="card-img-top"  src={logo}alt="" style={{width: '150px'}}/>
                 <h2> Easy Fast and Reliable</h2>
                 <p>Go Shopping for marchendise, just go to dumb merch
                     shopping the biggest merchandise in Indonesia
                 </p>
                 <button type="button" className="btn btn-danger"onClick={handleNavigateToLogin} >Login</button>
                <button type="button" className="btn btn-dark">Register</button>
                </div>
                 <div className="col-4">
                    <div className="card bg-dark ">
                        <div class="card-body bg-dark">
                            <h5 class="card-title">Register</h5>
                            <form>
                                <div className="mb-3">
                                     <label for="exampleInputEmail1" className="form-label"></label>
                                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Name"/>
   
                                </div>
                               
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"></label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Email'/>
                                </div>

                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label"></label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Password'/>
                                </div>
                                 <button type="submit" className="btn btn-danger">Submit</button>
                            </form>
                        </div>
                    </div>
                
                    
                    </div>
            </div>
        </div>    
    )
};

export default Register;