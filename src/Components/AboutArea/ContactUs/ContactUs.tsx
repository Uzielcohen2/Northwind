import CancelIcon from '@mui/icons-material/Cancel';
import SendIcon from '@mui/icons-material/Send';
import { Button, TextField, Typography } from "@mui/material";
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import ContactModel from '../../../Models/ContactModel';
import contactService from '../../../Service/ContactService';
import notificationService from '../../../Service/NotificationService';
import appConfig from '../../../Utils/AppConfig';
import "./ContactUs.css";



function ContactUs(): JSX.Element {

    const navigate = useNavigate();


    const { register, handleSubmit } = useForm<ContactModel>()

    async function send(data: ContactModel) {
        try {
            const beData = await contactService.addMessage(data);
            localStorage.setItem("contact-data", beData.message)
            notificationService.success("Your message have send successfully,We will get back to you soon . Now you will be redirect home :) Thanks !")
            navigate(appConfig.HomeRoute);

        } catch (err: any) {
            notificationService.error(err.message)
        }
    }


    return (
        <div className="ContactUs">

            <div className="contact-title">
                <Typography variant="h3">
                    Contact Us

                </Typography>
            </div>

            <form onSubmit={handleSubmit(send)}>
                <TextField label="name" type="text" className="text-box" {...register("name")} />
                <TextField label="Email" type="mail" className="text-box"  {...register("email")} />
                <TextField label="Message" type="textarea" className="text-box" {...register("message")} />

                <button>Send <SendIcon /></button>
                <Button color="secondary">Clear &nbsp; <CancelIcon /></Button>


            </form>
        </div>
    );
}

export default ContactUs;
