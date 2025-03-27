import { Request, Response, NextFunction } from "express";
import { sendErrorResponse, sendValidationErrorResponse } from "../utils/response.utils";
import { Prisma } from "@prisma/client";

export const errorMiddleware = (
    error: any,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(error);
    // add check if we are in development mode
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
        sendValidationErrorResponse(res, error.message);
        return;
    }

    sendErrorResponse(
        res,
        error.message,
    )
}