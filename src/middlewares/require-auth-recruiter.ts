import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireAuthRecruiter = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("in require auth middleware recruiter 1.", req.currentUserRecruiter,"dffdfdf");

	if (!req.currentUserRecruiter) {
		throw new NotAuthorizedError();
	}

	
	console.log("in require auth middleware recruiter 2.", req.currentUserRecruiter,"dffdfdf");


    if (req.currentUserRecruiter.userType === "recruiter") {
        next();
	}
};
