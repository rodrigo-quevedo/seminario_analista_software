import InvalidJsonError from "@errors/400/InvalidJsonError";
import { Request, Response, NextFunction } from "express";

export function requireJsonContent(req: Request, res: Response, next: NextFunction) {
    
    if (["POST", "PUT", "PATCH", "DELETE"].includes(req.method)
        &&
        !req.is("application/json")
    ) 
        throw new InvalidJsonError();
    
    next();
}
