import express, { Request, Response, NextFunction } from 'express';

const logRequestMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const timestamp = new Date().toISOString();
    const method = req.method;
    const url = req.originalUrl;

    console.log(`${timestamp}  ${method}  ${url}`);
    next();
};

export default logRequestMiddleware;
