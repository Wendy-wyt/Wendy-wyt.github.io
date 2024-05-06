// import { ProjectDto } from "@/interfaces/project";

import { ProjectDto } from "@/interfaces/project";
import { useState } from "react"
import { Link } from "react-router-dom";

interface CardProps {
    project: ProjectDto
}

export default function Card({ project }: CardProps) {
    const [active, setActive] = useState(false);

    return (
        <div className={`m-10 h-96 w-80 cursor-pointer relative duration-500 [transform-style: preserve-3d] [perspective: 1000px] ${active && "[transform:rotateY(180deg)]"}`}
            onClick={() => { setActive(!active) }}>
            {
                active ? <div className="drop-shadow-sm rounded-lg h-full w-full absolute inset-0 bg-layer2 [backface-visibility: hidden] hover:-translate-y-2.5 duration-500 delay-200">
                    <div className="[transform:rotateY(180deg)] h-full text-black px-3 py-5 space-y-3 relative">
                        <p className="text-xl font-semibold">Accomplishments</p>
                        <ul className="list-disc list-inside space-y-2">
                            {project.accomplishements.map((accp, index) => <li key={index}>{accp}</li>)}
                        </ul>
                        <div className="absolute bottom-0 px-3 py-5 space-x-5 flex flex-row justify-center">
                            {
                                project.demo && <Link to={project.demo}>
                                    <div className="h-[40px] aspect-square bg-stone-400 rounded-full p-2">
                                        <div className="h-full bg-link bg-cover bg-center"></div>
                                    </div>
                                </Link>
                            }
                            {
                                project.codeUrl && <Link to={project.codeUrl}>
                                    <div className="h-[40px] aspect-square bg-stone-400 rounded-full p-1">
                                        <div className="h-full bg-github_dark bg-cover bg-center"></div>
                                    </div>
                                </Link>
                            }
                        </div>
                    </div>
                </div> : <div className="drop-shadow-sm rounded-lg h-full w-full absolute inset-0 bg-layer2 [backface-visibility: hidden] hover:-translate-y-2.5 duration-500 delay-200">
                    <img src={project.featurePhoto} alt="" className="w-full h-1/2 object-cover object-center" />
                    <div className="text-black m-3 space-y-3">
                        <p className="text-xl font-semibold">{project.title}</p>
                        <div className="flex flex-row flex-wrap space-x-2">
                            {project.type.map((type, index) => <div key={index}
                                className="text-neutral-600 text-xs bg-neutral-200 rounded-full py-1 px-2">
                                {type}
                            </div>)}
                        </div>
                        <p className="text-base">{project.brief}</p>
                    </div>
                </div>
            }

        </div>
    )
}
