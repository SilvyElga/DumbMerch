 import React from 'react';

import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';

// import Product from './Product'
// import GuestGreeting from './GuestGreeting';

// import {useNavigate} from 'react-router-dom';
// import logo from './pic/logo.jpeg'





function Category () {
    
    

    return (
        
                    
                    
                            <form>
                                <div className="mb-3">
                                     <label for="email" className="form-label"></label>
                                    <input 
                                    name="email"
                                    type="email" 
                                    class="form-control" 
                                    id="email" 
                                    placeholder="Email"/>
   
                                </div>
                                
                                <div class="d-grid gap-2">
                                 <button class="btn btn-success" type="submit">Login</button>

                                </div>
  
                                 {/* <button type="submit" className="btn btn-danger">Submit</button> */}
                            </form>
                       
                   
       
        
    )
};

export default Category;