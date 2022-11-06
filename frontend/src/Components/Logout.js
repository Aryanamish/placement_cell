import React, {useEffect, useState} from 'react'
import {Link, useNavigate} from "react-router-dom";
import NavBar from "./NavBar/NavBar";
import instance from "./axios";


const Logout = () => {
    let navigate = useNavigate()
    useEffect(()=>{
        instance.get('/logout/');
        window.location.reload('/login');
    },[]);
    return <></>
}


export default Logout