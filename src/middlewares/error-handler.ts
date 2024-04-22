import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
	err: any,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ errors: err.serializeErrors() });
	}

	console.error(err,"---------common errorhandling middleware---------"); // to check what error happent if it is not an instance of CustomError
	return res.status(500).json({
		errors: [
			{
				message: "something went wrong",
			},
		],
	});
};
