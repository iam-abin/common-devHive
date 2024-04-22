export enum TOPICS {
	USER_CREATED_TOPIC = "USER-CREATED-TOPIC",
	USER_UPDATED_TOPIC = "USER-UPDATED-TOPIC",

	JOB_CREATED_TOPIC = "JOB-CREATED-TOPIC",
	JOB_UPDATED_TOPIC = "JOB-UPDATED-TOPIC",
	JOB_DELETED_TOPIC = "JOB-DELETED-TOPIC",

	COMPANY_PROFILE_CREATED_TOPIC = "COMPANY-PROFILE-CREATED-TOPIC",
	COMPANY_PROFILE_UPDATED_TOPIC = "COMPANY-PROFILE-UPDATED-TOPIC",

	// CANDIDATE_PROFILE_CREATED_TOPIC = "CANDIDATE-PROFILE-CREATED-TOPIC", 
	// not needed as we are publishing event to admin and profile when creating creating a user
	CANDIDATE_PROFILE_UPDATED_TOPIC = "CANDIDATE-PROFILE-UPDATED-TOPIC",

	// RECRUITER_PROFILE_CREATED_TOPIC = "RECRUITER-PROFILE-CREATED-TOPIC", 
	// not needed as we are publishing event to admin and profile when creating creating a user
	RECRUITER_PROFILE_UPDATED_TOPIC = "RECRUITER-PROFILE-UPDATED-TOPIC",

	PAYMENT_CREATED_TOPIC = "PAYMENT-CREATED-TOPIC",

	MEMBERSHIP_PLAN_CREATED_TOPIC = "MEMBERSHIP-PLAN-CREATED-TOPIC",
	MEMBERSHIP_PLAN_UPDATED_TOPIC = "MEMBERSHIP-PLAN-UPDATED-TOPIC",

}