import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

const Layout: React.FC = () => {

    return (
        <div className='w-full'>
            <Navbar />
            <div className='flex flex-col min-h-screen'>
                <Outlet />
                <Footer />
            </div>

        </div>
    );
};

export default Layout;