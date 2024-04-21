import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';
import Footer from './footer';
import Navbar from './navbar';
import { browseAtom } from "../recoil/atoms/atoms";
import { useEffect } from "react";
import { BrowseOptions } from "../interfaces/browse_options";
import { useRecoilState } from "recoil";

const Layout: React.FC = () => {
    const [, setCurBrowseOption] = useRecoilState(browseAtom);
    const { param } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        switch (param) {
            case BrowseOptions.PROJECTS:
                setCurBrowseOption(BrowseOptions.PROJECTS);
                break;
            case BrowseOptions.RESUME:
                setCurBrowseOption(BrowseOptions.RESUME);
                break;
            case BrowseOptions.WORK_EXPERIENCE:
                setCurBrowseOption(BrowseOptions.WORK_EXPERIENCE);
                break;
            case undefined:
                setCurBrowseOption(BrowseOptions.ABOUT);
                break;
            default:
                navigate("/");
        }
    });

    return (
        <div className='w-full'>
            <Navbar />
            <main className='min-h-screen'>
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;