import {Response} from "express";
import HttpStatus from "./httpsStatus.utils";

interface SuccessResponse<T> {
    success: true,
    data: T
}

interface ErrorResponse<T> {
    success: false,
    error: {
        message: T
    }
}

export const sendSuccessResponse = <T> (
    res: Response,
    data: any,
    status = HttpStatus.OK
): Response<SuccessResponse<T>> => {
    return res.status(status).json({success: true, data});
}

export const sendErrorResponse = <T> (
    res: Response,
    message: T,
    status = HttpStatus.INTERNAL_SERVER_ERROR
): Response<ErrorResponse<T>> => {
    return res.status(status).json({success: false, error: { message }})
}

export const sendValidationErrorResponse = <T> (
    res: Response,
    message: T,
    status = HttpStatus.BAD_REQUEST
): Response<ErrorResponse<T>> => {
    return res.status(status).json({success: false, error: { message }})
}
