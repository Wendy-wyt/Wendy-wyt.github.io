import { Link } from "react-router-dom"
import { useRecoilValue } from 'recoil';
import { browseAtom, navbarTransparentAtom } from "@/recoil/atoms/atoms";
import { BrowseOptions } from "@/interfaces/browse_options";

const Navbar = () => {
    const curBrowseOption = useRecoilValue(browseAtom);
    const navbarTransparent = useRecoilValue(navbarTransparentAtom);
    return (
        <nav className={`${navbarTransparent ? "bg-transparent" : "bg-layout"} z-50 text-menu_text w-full flex justify-center items-center fixed top-0 mb-3 py-2`}>
            <div className="w-full md:w-10/12 flex justify-between items-center">
                <div className="sections flex flex-row space-x-12">
                    <Link to='/' className={`${curBrowseOption === BrowseOptions.ABOUT && 'text-activated_text'}`}>About</Link>
                    <Link to='education' className={`${curBrowseOption === BrowseOptions.EDUCATION && 'text-activated_text'}`}>Education</Link>
                    <Link to='projects' className={`${curBrowseOption === BrowseOptions.PROJECTS && 'text-activated_text'}`}>Projects</Link>
                    <Link to='work_experience' className={`${curBrowseOption === BrowseOptions.WORK_EXPERIENCE && 'text-activated_text'}`}>Work Experience</Link>
                    <Link to='resume' className={`${curBrowseOption === BrowseOptions.RESUME && 'text-activated_text'}`}>Resume</Link>
                </div>
                <div className="profile flex flex-row space-x-12 items-center cursor-pointer">
                    <span>Yuting Wu</span>
                    <div className="bg-profile bg-cover w-12 h-12 rounded-full"></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar