import axios from "axios";
import ContactModel from "../Models/ContactModel";
import appConfig from "../Utils/AppConfig";
import { ContactActions, ContactActionTypes, contactStore } from "../Redux/ContactState";

class ContactService {

    // Add a new contact message
    public async addMessage(message: ContactModel): Promise<ContactModel> {

        const response = await axios.post(appConfig.contactUrl, message);
        const beMessage = response.data;

        const action: ContactActions = { type: ContactActionTypes.AddMessage, payload: beMessage }
        contactStore.dispatch(action)
        return beMessage
    }
    // ---------------------------------------------------------

    // Get All Messages - >
    public async getAllMessages(): Promise<ContactModel[]> {

        let message = contactStore.getState().message;
        if (message.length === 0) {
            const response = await axios.get(appConfig.contactUrl);
            message = response.data
        }
        return message
    }
}

const contactService = new ContactService();

export default contactService;