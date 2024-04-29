import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';

const Layout: React.FC = () => {

    return (
        <div className='w-full'>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Layout;