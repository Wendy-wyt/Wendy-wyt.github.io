import { useRecoilState, useRecoilValue } from "recoil"
import Card from "./components/card"
import { filtersAtom, projectsAtom } from "@/recoil/atoms/atoms";
import { useEffect, useState } from "react";
import { readProjects } from "@/lib/readFile";
import { FilterButton } from "./components/filter_button";
import Video from "./components/video";


const Projects = () => {
    const [projects, setProjects] = useRecoilState(projectsAtom);
    const filePath = "/projects.json";
    const filters = useRecoilValue(filtersAtom);
    const [openVideo, setOpenVideo] = useState(false);
    const [currVideo, setCurrVideo] = useState("")

    const handleOpenVideo = (video: string) => {
        setOpenVideo(true);
        setCurrVideo(video);
    }

    const handleCloseVideo = () => {
        setOpenVideo(false);
        setCurrVideo("");
    }

    useEffect(() => {
        readProjects(filePath).then((res) => {
            setProjects(res);
        })
    });

    return (
        <div>
            {
                openVideo && currVideo && <Video url={currVideo} handleClose={handleCloseVideo} />
            }
            <div className="h-[56px]"></div>
            <div className="w-full px-20 lg:px-32">
                <FilterButton></FilterButton>
            </div>
            <div className="flex flex-row flex-wrap justify-around md:px-20 lg:px-32">
                {
                    filters.length === 0 ?
                        (projects.map((project, index) => <Card
                            handleOpenVideo={handleOpenVideo}
                            key={index}
                            project={project} />)) :
                        (projects.filter((project) => {
                            let res = false;
                            for (const type of project.type) {
                                res ||= filters.includes(type);
                                if (res) return true;
                            }
                            return false;
                        }).map((project, index) => <Card
                            handleOpenVideo={handleOpenVideo}
                            key={index}
                            project={project} />))
                }
            </div>
        </div>
    )
}

export default Projects