import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import { Outlet, useLocation } from 'react-router';
import { initAOS, refreshAOS } from '../utils/aosConfig';

const MainLayout = () => {
    const location = useLocation();
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        // Initialize AOS after component mounts
        const timer = setTimeout(() => {
            initAOS();
            setIsReady(true);
        }, 50);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (isReady) {
            // Refresh AOS on route changes with delay
            const timer = setTimeout(() => {
                refreshAOS();
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [location, isReady]);

    return (
        <div>
            <Navbar/>
            <div className='max-w-6xl mx-auto mt-4'>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
};

export default MainLayout;