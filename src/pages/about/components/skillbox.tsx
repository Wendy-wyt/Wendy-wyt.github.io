import { useRecoilValue } from "recoil";
import skillbutton from "./skillbutton";
import { skillsAtom } from "@/recoil/atoms/atoms";

const SkillsBox = () => {
    const skills = useRecoilValue(skillsAtom);

    return (
        <div className="w-full flex items-center justify-center my-10">
            <div className="w-11/12 md:w-8/12 flex flex-row flex-wrap justify-center">
                {skills.map((skill, index) => skillbutton(skill, index))}
            </div>
        </div>
    )
}

export default SkillsBox