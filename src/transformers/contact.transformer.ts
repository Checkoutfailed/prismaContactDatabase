import { Contact } from "@prisma/client";

//convert our room data to Client
export const contactTransformer = (roomContact: any):Omit<Contact, 'id' | 'created_at'> => { //add actual roomtype
    let contact:Omit<Contact, 'id' | 'created_at'> = {
        name: roomContact.name,
        email: roomContact.email,
        phone_number: roomContact.phoneNumber,
        image_url: roomContact.imageUrl,
        occupation: roomContact.occupation,
        notes: roomContact.notes,
        is_favorite: roomContact.isFavorite,
        local_id: roomContact.localId,
        edited_at: roomContact.editedAt.toString()
    }
    return contact;
}