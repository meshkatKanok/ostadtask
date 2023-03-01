import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Fotter/Footer';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
     
        </div>
    );
};

export default Main;