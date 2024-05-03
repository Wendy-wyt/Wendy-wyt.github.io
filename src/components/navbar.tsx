import { Link } from "react-router-dom"
import { useRecoilState, useRecoilValue } from 'recoil';
import { browseAtom, navbarTransparentAtom } from "@/recoil/atoms/atoms";
import { BrowseOptions } from "@/interfaces/browse_options";
import { useEffect, useState } from "react";

const Navbar = () => {
    const curBrowseOption = useRecoilValue(browseAtom);
    const [menuOn, setMenuOn] = useState(false);
    const [navbarTransparent, setNavbarTransparent] = useRecoilState(navbarTransparentAtom);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setNavbarTransparent(true);
            } else {
                setNavbarTransparent(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* Mobile Navigation Bar */}
            {
                menuOn && <nav className="z-[3] h-screen w-screen flex flex-row fixed">
                    <div className="h-full w-3/4 bg-black py-2 pl-3 flex flex-col items-start space-y-5 text-menu_text text-xl">
                        <div className="menu block h-10 w-10 bg-menu bg-contain bg-center"
                            onClick={() => setMenuOn(false)}>
                        </div>
                        <Link to='/' className={`${curBrowseOption === BrowseOptions.ABOUT && 'text-activated_text'} pl-2`}
                            onClick={() => setMenuOn(false)}>About</Link>
                        <Link to='education' className={`${curBrowseOption === BrowseOptions.EDUCATION && 'text-activated_text'} pl-2`} onClick={() => setMenuOn(false)}>Education</Link>
                        {/* <Link to='projects' className={`${curBrowseOption === BrowseOptions.PROJECTS && 'text-activated_text'} pl-2`} onClick={() => setMenuOn(false)}>Projects</Link> */}
                        <Link to='work_experience' className={`${curBrowseOption === BrowseOptions.WORK_EXPERIENCE && 'text-activated_text'} pl-2`} onClick={() => setMenuOn(false)}>Work Experience</Link>
                        <Link to='resume' className={`${curBrowseOption === BrowseOptions.RESUME && 'text-activated_text'} pl-2`} onClick={() => setMenuOn(false)}>Resume</Link>
                    </div>
                    <div className="grow" onClick={() => { setMenuOn(false) }}></div>
                </nav>
            }
            {/* Full Navigation Bar */}
            <nav className={`${navbarTransparent ? "bg-transparent" : "bg-layout"} z-[2] text-menu_text w-full flex justify-center items-center fixed top-0 mb-3 py-2`}>
                <div className="w-full md:w-10/12 flex justify-between items-center">
                    <div className="sections hidden md:flex flex-row space-x-6 lg:space-x-12">
                        <Link to='/' className={`${curBrowseOption === BrowseOptions.ABOUT && 'text-activated_text'}`}>About</Link>
                        <Link to='education' className={`${curBrowseOption === BrowseOptions.EDUCATION && 'text-activated_text'}`}>Education</Link>
                        {/* <Link to='projects' className={`${curBrowseOption === BrowseOptions.PROJECTS && 'text-activated_text'}`}>Projects</Link> */}
                        <Link to='work_experience' className={`${curBrowseOption === BrowseOptions.WORK_EXPERIENCE && 'text-activated_text'}`}>Work Experience</Link>
                        <Link to='resume' className={`${curBrowseOption === BrowseOptions.RESUME && 'text-activated_text'}`}>Resume</Link>
                    </div>
                    <div className="menu block md:hidden h-10 aspect-square bg-menu bg-contain bg-center mx-3"
                        onClick={() => setMenuOn(true)}>
                    </div>
                    <div className="profile flex flex-row space-x-6 lg:space-x-12 items-center cursor-pointer mx-3">
                        <span className="hidden md:block">Yuting Wu</span>
                        <div className="bg-profile bg-cover h-10 md:h-12 aspect-square rounded-full"></div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar