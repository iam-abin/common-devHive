import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";

export const requireAuthCandidate = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	console.log("in require auth middleware candidate 1.", req.currentUserCandidate,"dffdfdf");

	if (!req.currentUserCandidate) {
		throw new NotAuthorizedError();
	}

	console.log("in require auth middleware candidate 2.", req.currentUserCandidate,"dffdfdf");


    if (req.currentUserCandidate.userType === "candidate") {
        next();
	}
};
