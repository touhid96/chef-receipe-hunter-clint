/* eslint-disable no-unused-vars */
import React from 'react';
import NavBar from '../components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';


const Main = () => {
    return (
        <div className=" bg-gray-300">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;