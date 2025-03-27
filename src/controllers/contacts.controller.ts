import { NextFunction, Request, Response } from "express";
import { Contact } from "@prisma/client";
import { sendSuccessResponse } from "../utils/response.utils";
import { contactTransformer } from "../transformers/contact.transformer";
import * as ContactService from "../services/contacts.service";

export const getContacts = async (
    _: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const contacts = await ContactService.grabAllContacts();

        sendSuccessResponse(response, contacts);

    } catch (error) {
        next(error);
    };
}

export const createContacts = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const data = request.body;
        const newContact: Omit<Contact, 'id' | 'created_at'> = contactTransformer(data);

        const createdContact = await ContactService.createContact(newContact);

        sendSuccessResponse(response, createdContact);
        
    } catch (error) {
        next(error);

    };
}

export const deleteContact = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {

        const {localId} = request.body;

        const deletedContact = await ContactService.deleteContact(localId);

        sendSuccessResponse(response, deletedContact);

    } catch (error) {
        next(error);
    }
}

export const updateContact = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {
    try {
        const data = request.body;

        const transformedContact: Omit<Contact, 'id' | 'created_at'> = contactTransformer(data);

        const updatedContact = await ContactService.updateContact(transformedContact);

        sendSuccessResponse(response, updatedContact)        

    } catch (error) {
        next(error);
    }
}
