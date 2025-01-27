import jwt from "jsonwebtoken";
import { IUserRole } from "../types/role";

export interface IJwtPayload {
    userId: string;
    email: string;
    role: Partial<IUserRole>;
}

export const verifyJwtToken = (token: string): IJwtPayload => {
    if (!process.env.JWT_SECRET_KEY!)
        throw new Error("please provide JWT SECRET KEY");

    const decodedData = jwt.verify(token,process.env.JWT_SECRET_KEY!) as IJwtPayload;
    return decodedData;
};
