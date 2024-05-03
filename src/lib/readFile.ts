import { EducationDto } from "@/interfaces/education";
import { SkillDto } from "@/interfaces/skills";
import { WorkExperienceDto } from "@/interfaces/work_experience";

export const readSkills = async (filePath: string): Promise<SkillDto[]> => {
    const skills = await fetch(filePath).then((res) => {
        return res.json();
    });
    return skills;
}

export const readAllEducation = async (filePath: string): Promise<EducationDto[]> => {
    const allEducation = await fetch(filePath).then((res) => {
        return res.json();
    });
    return allEducation;
}

export const readAllWorkExperience = async (filePath: string): Promise<WorkExperienceDto[]> => {
    const allWorkExperience = await fetch(filePath).then((res) => {
        return res.json();
    });
    return allWorkExperience;
}