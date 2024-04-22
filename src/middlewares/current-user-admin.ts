import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface UserPayload {
	id: string;
	email: string;
	userType: string;
}

// to reach to an existing type definition or interface of 'Request' and make a modification to it

// here we are telling ts that , inside of the express project ,find the predefined Interface of
// Request and add following modifiations

declare global {
	namespace Express {
		interface Request {
			currentUserAdmin?: UserPayload; // '?' indicate if currentUser is defined
			// currentUserRecruiter?: UserPayload; // '?' indicate if currentUser is defined
			// currentUserCandidate?: UserPayload; // '?' indicate if currentUser is defined
		}
	}
}

export const currentUserAdminCheck = (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	// if (!req.session?.adminToken) {
	// 	return next();  // it will be checked 'req.currentUser' in the next middleware 'requireAuth'
	// }

	let token = null;
	console.log(
		"in currentUserAdminCheck req.headers ",
		req.headers?.authorization
	);

	if (req.headers.authorization) {
		const authHeader = req.headers.authorization;
		if (authHeader.startsWith("Bearer ")) {
			token = authHeader.substring("Bearer ".length);
		}
	}

	// const token = req.session?.adminToken
	// // const token = req.cookies?.adminToken;
	console.log(token, "is jwt tokkkkkkkkkkkkkkken");

	if (token == null) {
		console.log(token, "nooo tokkkkkkkkkkkkkkken");
		return next(); // it will check 'req.currentUser' in the next middleware 'requireAuth'
	}

	console.log(token, "yesss tokkkkkkkkkkkkkkken");

	try {
		console.log("in try");
		const payload = jwt.verify(
			token,
			process.env.JWT_SECRET_KEY!
		) as UserPayload;

		console.log(payload, "after jwt verify from common currentUserAdmin ");
		if (payload && payload.email) {
			if (payload.userType === "admin") {
				req.currentUserAdmin = payload;
			}
		}
		// req.currentUserAdmin = payload;
		console.log(req.currentUserAdmin, "req.currentUserAdmin");
	} catch (error) {
		console.error(error, "currentUserAdmin middleware token verify error ");
		// return res.status(401).json({ error: "Unauthorized" });
	}

	next();
};
