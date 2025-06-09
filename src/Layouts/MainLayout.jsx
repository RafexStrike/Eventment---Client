import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            <div className='max-w-6xl mx-auto mt-4'><Navbar/></div>
            <div>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;