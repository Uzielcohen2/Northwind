import { createStore } from "redux";
import ContactModel from "../Models/ContactModel";

export class ContactState {
    message: ContactModel[] = [];
}

export enum ContactActionTypes {
    AddMessage = "AddMessage",
    GetAllMessages = "GetAllMessages"
}

export interface ContactActions {
    type: ContactActionTypes,
    payload?: any
}

function contactReducer(currentState = new ContactState(), action: ContactActions): ContactState {

    const newState = { ...currentState };

    switch (action.type) {
        // Add Message
        case ContactActionTypes.AddMessage:
            newState.message.push(action.payload);
            break;
        // Get all Messages
        case ContactActionTypes.GetAllMessages:
            newState.message = action.payload;
            break;
    }

    return newState
}

export const contactStore = createStore(contactReducer)