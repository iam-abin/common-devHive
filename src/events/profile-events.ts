import { TOPICS } from "./topics";

export interface CANDIDATE_PROFILE_UPDATED_EVENT {
    topic: TOPICS.CANDIDATE_PROFILE_UPDATED_TOPIC;
    data: Partial<{
        name: string;
        email: string;
        phone: number;
        gender: string;
        currentLocation: string;
        address: object;
        skills: string[];
        profileImage: string;
        about: string;
        resume: string;
        experience: string;
        preferredJobs: string;
        isActive: boolean
    }> & { userId: string };
}

export interface RECRUITER_PROFILE_UPDATED_EVENT {
    topic: TOPICS.RECRUITER_PROFILE_UPDATED_TOPIC;
    data: Partial<{
        name: string;
        email: string;
        phone: number;
        gender: string;
        profileImage: string;
        about: string;
        companyName: string;
        companyLocation: string;
        companyWebsite: string;
        companyState: string;
        companyCountry: string;
        isActive: boolean; 
    }> & { userId: string };
}

// export interface COMPANY_PROFILE_CREATED_EVENT {
// 	topic: TOPICS.COMPANY_PROFILE_CREATED_TOPIC;
// 	data: {
// 		companyName: string;
// 		companyLocation?: string;
// 		email?: string;
// 		isActive: boolean;
// 		logo?: string;
// 		website?: string;
// 		companyState?: string;
// 		companyCountry?: string;
// 		description?: string;
// 		recruiters?: string[];
// 		company_id?: string;
// 	};
// }

// export interface COMPANY_PROFILE_UPDATED_EVENT {
// 	topic: TOPICS.COMPANY_PROFILE_UPDATED_TOPIC;
// 	data: {
// 		companyName: string;
// 		companyLocation?: string;
// 		email?: string;
// 		isActive: boolean;
// 		logo?: string;
// 		website?: string;
// 		companyState?: string;
// 		companyCountry?: string;
// 		description?: string;
// 		recruiters?: string[];
// 		company_id?: string;
// 	};
// }
