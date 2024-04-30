import { useNavigate, useParams } from "react-router-dom";
import { browseAtom } from "../recoil/atoms/atoms";
import { useEffect } from "react";
import { BrowseOptions } from "../interfaces/browse_options";
import { useRecoilState } from "recoil";
import About from "@/pages/about/about";
import Resume from "@/pages/resume/resume";

export default function Router() {
    const { param } = useParams();
    const navigate = useNavigate();
    const [curBrowseOption, setCurBrowseOption] = useRecoilState(browseAtom);

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
        <main className='grow h-full flex flex-col'>
            {
                curBrowseOption === BrowseOptions.ABOUT && <About />
            }
            {
                curBrowseOption === BrowseOptions.RESUME && <Resume />
            }
        </main>
    )
}
