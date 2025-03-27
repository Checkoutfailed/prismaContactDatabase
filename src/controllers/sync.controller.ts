import { NextFunction, Request, Response } from "express";
import { Contact } from "@prisma/client";
import { sendSuccessResponse } from "../utils/response.utils";
import * as ContactService from "../services/contacts.service";


export const syncBackLog = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {

    try {
        const {backlogs} = request.body;
        
        const deletedContacts = await ContactService.deleteMany(backlogs.map((log:any) => log.localId));
        sendSuccessResponse(response, deletedContacts);
        
    } catch (error) {
        next(error);
    }
}

export const syncLocalContacts = async (
    request: Request,
    response: Response,
    next: NextFunction
) => {

    try {
        const {data} = request.body;

        const foundContacts = await ContactService
            .findManyContacts(data.map((contact:Contact) => contact.local_id));

        let filteredContacts = foundContacts
            .map((contact:Contact) => contact.local_id);

        const nonSyncedContacts = data
            .filter((contact:Contact) => filteredContacts.indexOf(contact.local_id) == -1)
            .map((contact:Contact) => ({...contact, edited_at: contact.edited_at?.toString()}));
        
        const addedContacts = await ContactService.addManyContacts(nonSyncedContacts);

        sendSuccessResponse(response, addedContacts);
    } catch (error) {
        next(error);
    }
}
