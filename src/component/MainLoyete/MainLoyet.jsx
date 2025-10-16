import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Navbear';

const MainLoyet = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLoyet;