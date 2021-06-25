import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
    
    const authToken = request.headers.authorization;

    if(!authToken) {
        return response.status(401).end();
    }

    const token = authToken.split(" ");

    try {
        const decode = verify(token[1] , "97555587495e88cacbf710e1c8196000");
        return next();
    } catch (error) {
        return response.status(401).end();
    }

    
}