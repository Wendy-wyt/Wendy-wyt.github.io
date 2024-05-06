export interface ProjectDto {
    featurePhoto: string;
    title: string;
    brief: string;
    type: ProjectType[];
    accomplishements: string[];
    demo: string | undefined;
    codeUrl: string | undefined;
}

export enum ProjectType {
    FRONTEND = "Front End",
    BACKEND = "Back End",
    DEVOPS = "Dev Ops",
    DATAENGINEER = "Data Engineering",
    CLOUD = "Cloud"
}