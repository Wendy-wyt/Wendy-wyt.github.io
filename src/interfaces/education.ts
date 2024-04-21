export interface allEducation {
    allEducations: education[],
}

export interface education {
    school: string,
    startDate: string,
    endDate: string,
    gpa: string,
    city: string,
    state: string,
    courses: string[],
}