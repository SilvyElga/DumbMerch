import React, { useState } from 'react'

import dataProduct from './Data';
// import {container, form, col, button} from 'react-bootstrap';

// import images from './pic/images.jpg';
import trolley from './pic/shopping-cart.png';

function Detail (){
    const [counter, setCounter] = useState(0);


function add(){
    setCounter (counter + 1)
};

function less(){
    if (counter > 0){
        setCounter (counter - 1)
    };
    
};




    return (
        
        <div className="Container-login">

            <div class="row justify-content-center p-5">
                <div class="col-4">
                <img className="card-img-top" src="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg" alt="" style={{width: '300px'}}/>
                </div>
                <div class="col-4 text-light">
               <div className='title text-danger fs-3'>Mouse</div>
               <div>
                   <p><img className="card-img-top justify-content-center"  src={trolley}alt="" style={{width: '25px'}}/>  trolley: {counter}</p>
               </div>
                    <p>Stok : 600</p>
                    <ul>
                        <li>Resolusi: 100-12.000 dpi</li>
                        <li>Format data USB: 16 bit/axis</li>
                        <li>Mikroprosesor: 32-bit ARM</li>
                        <li>Tombol (Kiri / Kanan): 10 juta klik</li>
                        <li>jangkauan 250 kilometer1</li>
                    </ul>
                    <p>LIGHTSPEED Wireless Generasi Terbaru Kini Hadir untuk Semua Gamer
                        G304 adalah LIGHTSPEED wireless gaming mouse yang didesain untuk 
                        kinerja serius dengan inovasi teknologi terbaru dan dengan harga yang terjangkau.</p>
                    <div className='price text-danger fs-5 text-end'>500.000</div>

                    <div className='counterproduct d-inline m-5'>
                    <button type="button"  className="btn btn-danger m-3 " onClick={add}>add</button>
                    <button type="button" class="btn btn-danger"onClick={less}>less</button>
                    </div>
                    {/* <div class="d-grid gap-2">
                     <button class="btn btn-danger" type="button">Buy</button>
                    </div> */}

                        
                </div>
         </div>    
                
            </div> 
              
         )
        };

export default Detail;