import { IUserRole } from "../types/role";

export const ROLES: Readonly<IUserRole> = Object.freeze({
    ADMIN: "admin",
    CANDIDATE: "candidate",
    RECRUITER: "recruiter",
});
