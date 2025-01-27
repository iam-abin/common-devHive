import { Request, Response, NextFunction } from "express";
import { NotAuthorizedError } from "../errors/not-authorized-error";
import { IJwtPayload, verifyJwtToken } from "../utils/verifyJwt";

// Extend Express's Request interface globally
declare global {
    namespace Express {
        interface Request {
            currentUser: IJwtPayload;
        }
    }
}

// Helper function to extract token from Authorization header
const extractToken = (
    authorizationHeader: string | undefined
): string | null => {
    if (!authorizationHeader) return null;

    if (authorizationHeader.startsWith("Bearer ")) {
        return authorizationHeader.substring("Bearer ".length);
    }
    return null;
};

// Middleware to get current user from token and assign it to req.currentUser 
export const checkCurrentUser = (req: Request, res: Response, next: NextFunction) => {
        try {
            const barerToken = req.headers?.authorization;
            if (!barerToken) return next();
  
            let token  = extractToken(barerToken);
            if (!token) throw new NotAuthorizedError();

            const payload = verifyJwtToken(token);
            req.currentUser = payload;

            next();
        } catch (error: unknown) {
            if (error instanceof Error) {
                // Pass the error message string to NotAuthorizedError
                next(new NotAuthorizedError(error.message));
            } else {
                next(new NotAuthorizedError("Authorization error"));
            }
        }
    };

