import { atom } from 'recoil';
import { BrowseOptions } from '@/interfaces/browse_options';
import { SkillDto } from '@/interfaces/skills';
import { EducationDto } from '@/interfaces/education';

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