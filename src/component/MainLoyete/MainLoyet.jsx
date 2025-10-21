 import React from 'react';
  
import Navbar from '../Navbear';
import { Outlet } from 'react-router';
 

const MainLoyet = () => {
  return (
    <>
      <Navbar />
      <Outlet></Outlet>

    </>
  );
};

export default MainLoyet;
