import React from "react";


import { Navigate } from "react-router-dom";

function ProtectedRoutes(props){
    const mystate = localStorage.getItem("login")
    console.log("Inside ProtectedRoutes" + mystate)
    const {Component} = props
    return mystate ? <Component/> : <Navigate to='/login'/>
}

export default ProtectedRoutes;