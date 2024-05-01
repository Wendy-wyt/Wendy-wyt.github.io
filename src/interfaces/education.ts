export interface EducationDto {
    school: string,
    degree: string,
    major: string,
    minor?: string,
    awards: string[],
    startDate: string,
    endDate: string,
    gpa: string,
    city: string,
    state: string,
    courses: string[],
}