import React from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';

// import {useNavigate} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

import dataProduct from './Data';

function Login () {
    const navigate = useNavigate();

    const handleNavigateToDetail = () =>{

        navigate('/Detail')
    }


    console.log(dataProduct);

    return (
    <div className="Container-login text-danger">
            <div className= "title-product fs-3">Product</div>
        <div className="d-flex flex-row">
                {dataProduct.map((Data) =>(
                 <div className="p-2 text-light">
                 <div className="card bg-dark">
                     <img className="card-img-top" src={Data.photo} alt="" style={{width: '200px'}}/>
                         <div className="card-body">
                              <div className="card-text text-white">
                                  <h2>{Data.Name}</h2>
                                  <p>Rp.{Data.price}</p>
                                  <p>stock:{Data.qty}</p>
                              </div>
                              <button type="button" className="btn btn-danger"onClick={handleNavigateToDetail}>Buy</button>
                         </div>       
                 </div>
             </div>

            ))};
                     
         </div>
    </div>
            
    )
};

export default Login;