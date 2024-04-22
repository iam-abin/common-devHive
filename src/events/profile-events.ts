import { TOPICS } from "./topics";

export interface CANDIDATE_PROFILE_UPDATED_EVENT {
	topic: TOPICS.CANDIDATE_PROFILE_UPDATED_TOPIC;
	data: {
		name: string;
		email: string;
		phone: number;
		isActive: boolean;
		gender?: string;
		currentLocation?: string;
		address?: object;
		keySkills?: string[];
		profile_image?: string;
		about?: string;
		resume?: string;
		experience?: string;
		preferredJobs?:string;
		userId: string;
	};
}


export interface RECRUITER_PROFILE_UPDATED_EVENT {
	topic: TOPICS.RECRUITER_PROFILE_UPDATED_TOPIC;
	data: {
		name: string;
		email: string;
		phone: number;
		isActive: boolean;
		gender?: string;
		profile_image?: string;
		about?: string;
		// company_id?: string;
		company_name?: string,
		company_location?: string,
		company_website?: string,
		company_state?: string,
		company_country?: string,
		userId: string;
	};
}

export interface COMPANY_PROFILE_CREATED_EVENT {
	topic: TOPICS.COMPANY_PROFILE_CREATED_TOPIC;
	data: {
		company_name: string;
		company_location?: string;
		email?: string;
		isActive: boolean;
		logo?: string;
		website?: string;
		company_state?: string;
		company_country?: string;
		description?: string;
		recruiters?: string[];
		company_id?: string;
	};
}

export interface COMPANY_PROFILE_UPDATED_EVENT {
	topic: TOPICS.COMPANY_PROFILE_UPDATED_TOPIC;
	data: {
		company_name: string;
		company_location?: string;
		email?: string;
		isActive: boolean;
		logo?: string;
		website?: string;
		company_state?: string;
		company_country?: string;
		description?: string;
		recruiters?: string[];
		company_id?: string;
	};
}
