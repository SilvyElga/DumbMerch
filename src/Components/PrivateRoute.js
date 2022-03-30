import { Outlet, Navigate } from "react-router-dom";


export default function PrivateRoute (){

     const Login = true;

    return Login ? <Outlet /> : <Navigate to="/Register"/>;
}