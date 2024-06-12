import React from 'react';
import { Outlet } from 'react-router-dom'; // to render child routes in your application. It acts as a placeholder in the parent route's component where the matched child route's component will be rendered. 
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = () => {
  return (
    <>
        <Navbar />
        <Outlet /> {/* Outlet is a placeholder for child routes */}
        <ToastContainer />
    </>
  )
}

export default MainLayout