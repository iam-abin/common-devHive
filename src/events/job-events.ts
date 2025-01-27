import { TOPICS } from "./topics";

export interface JOB_CREATED_EVENT {
    topic: TOPICS.JOB_CREATED_TOPIC;
    data: Partial<{
        title: string;
        recruiterId: string;
        companyName: string;
        companyLocation: string;
        jobDescription: string;
        skills: string[];
        availablePosition: string;
        experienceRequired: string;
        educationRequired: string;
        employmentType: string;
        salaryMin: number;
        salaryMax: number;
        deadline: Date;
    }> & { jobId: string; isActive: boolean };
}

export interface JOB_UPDATED_EVENT {
    topic: TOPICS.JOB_UPDATED_TOPIC;
    data: Partial<{
        title: string;
        recruiterId: string;
        companyId: string;
        jobDescription: string;
        skills: string[];
        availablePosition: string;
        experienceRequired: string;
        educationRequired: string;
        location: string;
        employmentType: string;
        salaryMin: number;
        salaryMax: number;
        deadline: Date;
        isActive?: boolean;
    }> & {
        jobId: string;
    };
}

export interface JOB_DELETED_EVENT {
    topic: TOPICS.JOB_DELETED_TOPIC;
    data: {
        jobId: string;
    };
}
