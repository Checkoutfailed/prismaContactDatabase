import { Contact } from "@prisma/client";
import { database } from "../utils/global.utils";


export const grabAllContacts = async (): Promise<Contact[]> => {

    const contacts = await database.contact.findMany()
    
    return contacts

}

export const updateContact = async (
    contact: Omit<Contact, 'id' | 'created_at'>,

): Promise<Contact> => {
    
    const updatedContact = await database.contact.update({
        where: { local_id : contact.local_id },
        data: { ...contact }
    })

    return updatedContact
}

export const createContact = async (
    contact: Omit<Contact, 'id' | 'created_at'>
): Promise<Contact> => {
    const newContact = await database.contact.create({
        data: contact
    })

    return newContact
}

export const findManyContacts = async (
    ids: string[]
): Promise<Contact[]> => {
    const foundContacts =  await database.contact.findMany({
        where: {
            local_id: {
                in:ids
            }
        }
    })

    return foundContacts;
}

export const addManyContacts = async (
    contacts: Omit<Contact, 'id' | 'created_at'>[]
): Promise<Contact[]> => {
    
    const newContacts = await database.contact.createManyAndReturn({
        data: contacts
    })

    return newContacts;
}

export const deleteContact = async (
    local_id: string
): Promise<Contact> => {

    const deletedContact = await database.contact.delete({
        where: { local_id }
    })

    return deletedContact
}

export const deleteMany = async (
    ids: string[]
): Promise<Number> => {
    const deletedContacts = await database.contact.deleteMany({
        where: {
            local_id: {
                in: ids
            }
        }
    })

    return deletedContacts.count
}