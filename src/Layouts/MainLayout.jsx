import React, { useEffect } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import { initAOS, refreshAOS } from '../utils/aosConfig';

const MainLayout = () => {
    const location = useLocation();

    useEffect(() => {
        // Initialize AOS on first load
        initAOS();
    }, []);

    useEffect(() => {
        // Refresh AOS on route changes
        refreshAOS();
    }, [location]);

    return (
        <div>
            {/* Navbar now handles its own full-width background and content alignment */}
            <Navbar/>
            <div className='max-w-6xl mx-auto mt-4'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;