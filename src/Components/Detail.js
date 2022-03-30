import React from 'react';
import './loginStyle.css';
// import {container, form, col, button} from 'react-bootstrap';


// import images from './pic/images.jpg';
// import logo from './pic/logo.jpeg';


function Detail () {

    return (
        
        <div className="Container-login">

            <div class="row justify-content-center p-5">
                <div class="col-4">
                <img className="card-img-top" src="https://m.media-amazon.com/images/I/61LtuGzXeaL._AC_SL1465_.jpg" alt="" style={{width: '200px'}}/>
                </div>
                <div class="col-4 text-light">
               
                <h3>Mouse</h3>
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
                        
                </div>
         </div>    
                
            </div> 
              
         )
        };

export default Detail;