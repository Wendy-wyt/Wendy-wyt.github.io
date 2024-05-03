import { EducationDto } from "@/interfaces/education";
import { readAllEducation } from "@/lib/readFile";
import { allEducationAtom } from "@/recoil/atoms/atoms";
import { useEffect } from "react"
import { useRecoilState } from "recoil";

const Education = () => {
    const filePath = '/education.json';
    const [allEducation, setAllEducation] = useRecoilState(allEducationAtom);

    useEffect(() => {
        readAllEducation(filePath).then((res) => {
            setAllEducation(res);
        });
    }, []);

    const renderEducation = (edu: EducationDto, index: number) => (
        <div key={index}
            className="w-10/12 flex flex-col p-3 md:p-7 rounded-xl bg-intro_border font-mono text-sm md:text-lg m-10 drop-shadow-sm">
            <div className="flex flex-col md:flex-row justify-between text-xl mb-3">
                <p className="font-semibold ">{edu.school}</p>
                <p>{edu.startDate} - {edu.endDate}</p>
            </div>
            <div className="flex flex-col md:flex-row justify-between mb-3">
                <p className="italic">{edu.degree}</p>
                <p>{edu.city}, {edu.state}</p>
            </div>
            <ol className="list-disc list-inside space-y-2">
                <li>{edu.gpa}</li>
                <li>{edu.awards.join(", ")}</li>
                <li><strong>Major: </strong> {edu.major}</li>
                {edu.minor && <li><strong>Minor: </strong>{edu.minor}</li>}
                <li><strong>Courses: </strong>{edu.courses.join(", ")}</li>
            </ol>
        </div>
    )

    return (
        <div className="flex flex-col w-full h-full items-center">
            <div className="h-[56px]"></div>
            {
                allEducation.map((edu, index) => renderEducation(edu, index))
            }
        </div>
    )
}

export default Education