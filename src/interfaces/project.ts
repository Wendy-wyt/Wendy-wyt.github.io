export interface ProjectDto {
    featurePhoto: string;
    title: string;
    brief: string;
    type: ProjectType[];
    accomplishements: string[];
    demo?: DemoDto;
    codeUrl?: string;
}

export interface DemoDto {
    video?: string;
    url?: string;
}

export enum ProjectType {
    FRONTEND = "Front End",
    BACKEND = "Back End",
    DEVOPS = "Dev Ops",
    DATAENGINEER = "Data Engineering",
    CLOUD = "Cloud"
}