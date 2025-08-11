import { NextFunction, Request, Response } from "express";

export default function cors(req: Request, res: Response, next: NextFunction){
    const corsHeaders = new Headers({ 
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        'Access-Control-Allow-Credentials': 'true', //test CORS
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
    });
    
    res.setHeaders(corsHeaders);

    next();
}