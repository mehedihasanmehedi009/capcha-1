 import React from 'react';
  
import Navbar from '../Navbear';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const MainLoyet = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>
       <ToastContainer/>
    </>
  );
};

export default MainLoyet;
