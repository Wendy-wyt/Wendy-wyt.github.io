import { useNavigate, useParams } from "react-router-dom";
import { browseAtom } from "../recoil/atoms/atoms";
import { useEffect } from "react";
import { BrowseOptions } from "../interfaces/browse_options";
import { useRecoilState } from "recoil";
import About from "@/pages/about/about";
import Resume from "@/pages/resume/resume";
import Education from "@/pages/education/education";
import WorkExperience from "@/pages/work_experience/work_experience";

export default function Router() {
    const { param } = useParams();
    const navigate = useNavigate();
    const [curBrowseOption, setCurBrowseOption] = useRecoilState(browseAtom);

    useEffect(() => {
        switch (param) {
            case BrowseOptions.EDUCATION:
                setCurBrowseOption(BrowseOptions.EDUCATION);
                break;
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
        <main className='grow h-full w-full flex flex-col'>
            {
                curBrowseOption === BrowseOptions.WORK_EXPERIENCE && <WorkExperience />
            }
            {
                curBrowseOption === BrowseOptions.ABOUT && <About />
            }
            {
                curBrowseOption === BrowseOptions.EDUCATION && <Education />
            }
            {
                curBrowseOption === BrowseOptions.RESUME && <Resume />
            }
        </main>
    )
}
