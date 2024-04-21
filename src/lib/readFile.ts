import { SkillDto } from "@/interfaces/skills";

const readFile = async (filePath: string): Promise<SkillDto[]> => {
    const skills = await fetch(filePath).then((res) => {
        return res.json();
    });
    return skills;
}

export default readFile