import React from 'react'

// import necessary object from react-router-dom
import { BrowserRouter, Routes, Route} from 'react-router-dom';

// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';


// import Login from './Components/Login';
// import "pages" component here
import Login from './Components/Login';
import Register from './Components/Register';
import Product from './Components/Product';


function App() {
  return (
    <BrowserRouter>
      {/* <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
            <li>
              <Link to="/Product">Product</Link>
            </li>
          </ul>
        </nav>
      </div> */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Product" element={<Product/>} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;