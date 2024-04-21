import { useEffect } from "react"
import Feature from "./components/feature"
import Intro from "./components/self-intro"
import SkillsBox from "./components/skillbox"
import readFile from "@/lib/readFile"
import { useRecoilState } from "recoil"
import { navbarTransparentAtom, skillsAtom } from "@/recoil/atoms/atoms"
import Contact from "./components/contact"

const About = () => {
    const [, setSkills] = useRecoilState(skillsAtom);
    const filePath = '/skills.json';
    const [, setNavbarTransparent] = useRecoilState(navbarTransparentAtom);

    useEffect(() => {
        readFile(filePath).then((res) => {
            setSkills(res);
        });
    }, []);

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
        <div className="w-full">
            <Feature />
            <Intro />
            <SkillsBox />
            <Contact />
        </div>
    )
}

export default About