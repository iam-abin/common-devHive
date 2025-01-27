import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { ForbiddenError } from "../errors/forbidden.error";


// Middleware factory that checks for different user types
export const auth = (requiredRole: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        try {
            if (!req.currentUser) throw new NotAuthorizedError();

            if (req.currentUser.role !== requiredRole)
                throw new ForbiddenError( "You have no permission to access this route" );

            next();
        } catch (error) {
            next(error);
        }
    };
};
