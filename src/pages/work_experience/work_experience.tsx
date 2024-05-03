import { WorkExperienceDto } from "@/interfaces/work_experience";
import { readAllWorkExperience } from "@/lib/readFile";
import { allWorkExperienceAtom } from "@/recoil/atoms/atoms";
import { useEffect } from "react";
import { useRecoilState } from "recoil";

export default function WorkExperience() {
    const filePath = "./work_experience.json";
    const [allWorkExperience, setAllWorkExperience] = useRecoilState(allWorkExperienceAtom);

    useEffect(() => {
        readAllWorkExperience(filePath).then((res) => {
            setAllWorkExperience(res);
        });
    }, []);

    const renderWorkExperience = (exp: WorkExperienceDto, index: number) => (
        <div key={index}
            className="w-10/12 flex flex-col p-3 md:p-7 rounded-xl bg-intro_border font-mono m-10 drop-shadow-sm">
            <div className="flex flex-col md:flex-row justify-between text-xl mb-3">
                <p className="font-semibold ">{exp.role}</p>
                <p>{exp.startDate} - {exp.endDate}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-3 text-base md:text-lg">
                <p className="italic">{exp.company}</p>
                <p>{exp.city}, {exp.state}</p>
            </div>
            <ol className="list-disc list-inside space-y-2 text-sm md:text-base">
                {exp.duties.map((duty, index) => <li key={index}>
                    {duty}
                </li>)}
            </ol>
            <div className="flex flex-wrap justify-center my-3 text-base md:text-lg">
                {exp.topSkills.map((skill, index) => <div
                    className="mx-2 my-1 px-3 py-1 rounded-full bg-slate-300/[0.35]"
                    key={index}>
                    {skill}
                </div>)}
            </div>
        </div>
    )

    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="h-[56px]"></div>
            {
                allWorkExperience.map((exp, index) => renderWorkExperience(exp, index))
            }
        </div>

    )
}
