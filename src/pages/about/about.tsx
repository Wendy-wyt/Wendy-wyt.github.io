import { useEffect } from "react"
import Feature from "./components/feature"
import Intro from "./components/self-intro"
import SkillsBox from "./components/skillbox"
import { readSkills } from "@/lib/readFile"
import { useRecoilState } from "recoil"
import { skillsAtom } from "@/recoil/atoms/atoms"
import Contact from "./components/contact"

const About = () => {
    const [, setSkills] = useRecoilState(skillsAtom);
    const filePath = '/skills.json';

    useEffect(() => {
        readSkills(filePath).then((res) => {
            setSkills(res);
        });
    }, []);

    return (
        <div className="w-full">
            <Feature />
            <Intro />
            <SkillsBox />
            <Contact />
        </div>
    )
}

export default About