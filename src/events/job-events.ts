import { TOPICS } from "./topics";

export interface JOB_CREATED_EVENT {
	topic: TOPICS.JOB_CREATED_TOPIC;
	data: {
		jobId: string;
		title: string;
		recruiterId: string;
		// companyId?: string;
		company_name: string;
		company_location: string;
		job_descriptions?: string;
		skills_required?: string | string[];
		available_position?: string;
		experience_required?: string;
		education_required?: string;
		// location?: string;
		employment_type?: string;
		salary_min?: number;
		salary_max?: number;
		isActive?: boolean;
	};
}

export interface JOB_UPDATED_EVENT {
	topic: TOPICS.JOB_UPDATED_TOPIC;
	data: {
		jobId: string;
		title: string;
		recruiterId: string;
		companyId?: string;
		job_descriptions?: string;
		skills_required?: string | string[];
		available_position?: string;
		experience_required?: string;
		education_required?: string;
		location?: string;
		employment_type?: string;
		salary_min?: number;
		salary_max?: number;
		isActive?: boolean;
	};
}

export interface JOB_DELETED_EVENT {
	topic: TOPICS.JOB_DELETED_TOPIC;
	data: {
		jobId: string;
	};
}
