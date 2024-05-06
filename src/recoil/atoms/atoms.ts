import { atom } from 'recoil';
import { BrowseOptions } from '@/interfaces/browse_options';
import { SkillDto } from '@/interfaces/skills';
import { EducationDto } from '@/interfaces/education';
import { WorkExperienceDto } from '@/interfaces/work_experience';
import { ProjectDto, ProjectType } from '@/interfaces/project';

export const browseAtom = atom({
    key: 'browseAtom',
    default: BrowseOptions.ABOUT as BrowseOptions,
});

export const skillsAtom = atom({
    key: 'skillsAtom',
    default: [] as SkillDto[],
});

export const navbarTransparentAtom = atom({
    key: 'navbarTransparentAtom',
    default: true,
});

export const allEducationAtom = atom({
    key: 'allEducationAtom',
    default: [] as EducationDto[],
});

export const allWorkExperienceAtom = atom({
    key: 'allWorkExperienceAtom',
    default: [] as WorkExperienceDto[],
})

export const projectsAtom = atom({
    key: 'projectsAtom',
    default: [] as ProjectDto[],
})

export const filtersAtom = atom({
    key: 'filtersAtom',
    default: [] as ProjectType[],
})