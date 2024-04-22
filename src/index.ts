// by doing the following we can import each of then from other files as, eg: 'import {BadRequestError} from '@abijobportal/common' '
// otherwise we will have to import like 'import {BadRequestError} from '@abijobportal/common/errors/bad-request-error' ' ,which is tough

// or it is used to Re-export stuff from errors and middlewares

export * from "./errors/bad-request-error";
export * from "./errors/custom-error";
export * from "./errors/database-connection-error";
export * from "./errors/not-authorized-error";
export * from "./errors/not-found-error";
export * from "./errors/request-validation-error";

export * from "./middlewares/current-user-admin";
export * from "./middlewares/current-user-candidate"
export * from "./middlewares/current-user-recruiter";

export * from "./utils/verifyJwt"

export * from "./middlewares/error-handler";

export * from "./middlewares/require-auth-admin";
export * from "./middlewares/require-auth-candidate";
export * from "./middlewares/require-auth-recruiter";

export * from "./middlewares/validate-request";

export * from "./events/topics";
export * from "./events/base-consumer";
export * from "./events/base-publisher";

export * from "./events/job-events"
export * from "./events/profile-events"
export * from "./events/user-events"
export * from "./events/payment-events"
export * from "./events/membership-plan-events"
