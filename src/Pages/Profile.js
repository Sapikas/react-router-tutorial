import { useEffect } from "react";
import React, { useState } from "react";
import {useNavigate, Link, Routes, Route, useRouteMatch, useLocation, BrowserRouter, Outlet} from "react-router-dom"
import viewProfile from '../components/ViewProfile' 
import editProfile from '../components/EditProfile' 

const Profile = ({login}) => {
    const navigate = useNavigate();

    useEffect(()=> {
        if (!login){
            navigate('/about');
        }
    }, [login, navigate]);

    const location = useLocation().pathname;
    
    return (
    <>
        <h1>Profile Page</h1>
        <ul>
            <li>
                <Link to={`${location}/viewprofile`}>View Profile</Link>
            </li>
            <li>
                <Link to={`${location}/editprofile`}>Edit Profile</Link>
            </li>
        </ul>
        {/* <Routes>
            <Route path={`${location}/viewprofile`} element={viewProfile()}/>
            <Route path={`${location}/editprofile`} element={editProfile()}/>
        </Routes>
        <Outlet /> */}
    </>
    )
}

export default Profile;